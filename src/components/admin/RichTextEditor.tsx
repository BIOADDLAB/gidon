'use client';

import type { ChangeEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '@/lib/firebase';

interface RichTextEditorProps {
    value: string;
    onChange: (value: string) => void;
}

const toolbarButtons = [
    { label: 'H1', title: '제목 1', action: 'heading1' },
    { label: 'H2', title: '제목 2', action: 'heading2' },
    { label: 'P', title: '본문', action: 'paragraph' },
    { label: 'B', title: '굵게', action: 'bold' },
    { label: 'I', title: '기울임', action: 'italic' },
    { label: '•', title: '목록', action: 'bulletList' },
    { label: '1.', title: '번호 목록', action: 'orderedList' },
    { label: '❝', title: '인용', action: 'blockquote' },
] as const;

const getToolbarButtonClass = (active = false) => {
    return `flex h-9 min-w-9 items-center justify-center rounded-lg px-3 text-sm font-bold transition-colors ${
        active ? 'bg-green-600 text-white shadow-sm' : 'text-ink-500 hover:bg-white hover:text-green-600'
    }`;
};

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
    const imageInputRef = useRef<HTMLInputElement>(null);
    const [isUploadingImage, setIsUploadingImage] = useState(false);

    const editor = useEditor({
        immediatelyRender: false,
        extensions: [
            StarterKit,
            Link.configure({
                openOnClick: false,
                autolink: true,
                defaultProtocol: 'https',
                HTMLAttributes: {
                    class: 'text-green-600 underline underline-offset-4',
                },
            }),
            Image.configure({
                HTMLAttributes: {
                    class: 'my-6 max-h-[420px] w-full rounded-2xl object-contain',
                },
            }),
            Placeholder.configure({
                placeholder:
                    '본문을 작성하세요. 제목, 문단, 목록, 이미지, 링크를 넣을 수 있습니다.',
            }),
        ],
        content: value,
        editorProps: {
            attributes: {
                class:
                    'min-h-[560px] bg-white px-12 py-10 text-[17px] leading-9 text-ink-900 outline-none [&_.is-editor-empty:first-child::before]:float-left [&_.is-editor-empty:first-child::before]:h-0 [&_.is-editor-empty:first-child::before]:text-ink-500/45 [&_.is-editor-empty:first-child::before]:content-[attr(data-placeholder)] [&_h1]:my-6 [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:leading-tight [&_h2]:my-5 [&_h2]:text-2xl [&_h2]:font-bold [&_p]:my-4 [&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-7 [&_ol]:my-5 [&_ol]:list-decimal [&_ol]:pl-7 [&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-green-600 [&_blockquote]:bg-paper [&_blockquote]:py-4 [&_blockquote]:pl-5',
            },
        },
        onUpdate: ({ editor: nextEditor }) => {
            onChange(nextEditor.getHTML());
        },
    });

    useEffect(() => {
        if (!editor || editor.getHTML() === value) {
            return;
        }

        editor.commands.setContent(value);
    }, [editor, value]);

    const runToolbarAction = (action: (typeof toolbarButtons)[number]['action']) => {
        if (!editor) {
            return;
        }

        if (action === 'heading1') editor.chain().focus().toggleHeading({ level: 1 }).run();
        if (action === 'heading2') editor.chain().focus().toggleHeading({ level: 2 }).run();
        if (action === 'paragraph') editor.chain().focus().setParagraph().run();
        if (action === 'bold') editor.chain().focus().toggleBold().run();
        if (action === 'italic') editor.chain().focus().toggleItalic().run();
        if (action === 'bulletList') editor.chain().focus().toggleBulletList().run();
        if (action === 'orderedList') editor.chain().focus().toggleOrderedList().run();
        if (action === 'blockquote') editor.chain().focus().toggleBlockquote().run();
    };

    const isActionActive = (action: (typeof toolbarButtons)[number]['action']) => {
        if (!editor) {
            return false;
        }

        if (action === 'heading1') return editor.isActive('heading', { level: 1 });
        if (action === 'heading2') return editor.isActive('heading', { level: 2 });
        if (action === 'paragraph') return editor.isActive('paragraph');
        if (action === 'bold') return editor.isActive('bold');
        if (action === 'italic') return editor.isActive('italic');
        if (action === 'bulletList') return editor.isActive('bulletList');
        if (action === 'orderedList') return editor.isActive('orderedList');
        if (action === 'blockquote') return editor.isActive('blockquote');

        return false;
    };

    const setLink = () => {
        if (!editor) {
            return;
        }

        const previousUrl = editor.getAttributes('link').href as string | undefined;
        const url = window.prompt('연결할 URL을 입력하세요.', previousUrl ?? 'https://');

        if (url === null) {
            return;
        }

        if (url.trim() === '') {
            editor.chain().focus().unsetLink().run();
            return;
        }

        editor.chain().focus().setLink({ href: url.trim() }).run();
    };

    const openImageUploader = () => {
        if (!editor) {
            return;
        }

        imageInputRef.current?.click();
    };

    const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] ?? null;

        if (!file || !editor) {
            return;
        }

        setIsUploadingImage(true);

        try {
            const safeFileName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
            const imageRef = ref(storage, `column/body/${Date.now()}-${safeFileName}`);
            const uploadResult = await uploadBytes(imageRef, file);
            const imageUrl = await getDownloadURL(uploadResult.ref);

            editor.chain().focus().setImage({ src: imageUrl }).run();
        } catch {
            window.alert('이미지 업로드 중 오류가 발생했습니다. Storage 권한을 확인해 주세요.');
        } finally {
            setIsUploadingImage(false);
            event.target.value = '';
        }
    };

    return (
        <div className="overflow-hidden rounded-3xl border border-line bg-[#F7F7F5] shadow-sm">
            <div className="sticky top-0 z-10 border-b border-line bg-[#F1EFE9]">
                <div className="flex flex-wrap items-center gap-1 px-4 py-2">
                    <div className="mr-2 flex items-center gap-1 border-r border-line pr-3">
                        <button
                            type="button"
                            className={getToolbarButtonClass()}
                            title="실행취소"
                            onClick={() => editor?.chain().focus().undo().run()}
                        >
                            ↶
                        </button>
                        <button
                            type="button"
                            className={getToolbarButtonClass()}
                            title="다시실행"
                            onClick={() => editor?.chain().focus().redo().run()}
                        >
                            ↷
                        </button>
                    </div>

                    <div className="mr-2 flex items-center gap-1 border-r border-line pr-3">
                        {toolbarButtons.slice(0, 3).map((button) => (
                            <button
                                key={button.action}
                                type="button"
                                className={getToolbarButtonClass(isActionActive(button.action))}
                                title={button.title}
                                onClick={() => runToolbarAction(button.action)}
                            >
                                {button.label}
                            </button>
                        ))}
                    </div>

                    <div className="mr-2 flex items-center gap-1 border-r border-line pr-3">
                        {toolbarButtons.slice(3).map((button) => (
                            <button
                                key={button.action}
                                type="button"
                                className={getToolbarButtonClass(isActionActive(button.action))}
                                title={button.title}
                                onClick={() => runToolbarAction(button.action)}
                            >
                                {button.label}
                            </button>
                        ))}
                    </div>

                    <button
                        type="button"
                        className={getToolbarButtonClass(editor?.isActive('link'))}
                        title="링크 삽입"
                        onClick={setLink}
                    >
                        링크
                    </button>
                    <button
                        type="button"
                        className={getToolbarButtonClass(isUploadingImage)}
                        title="본문 이미지 삽입"
                        onClick={openImageUploader}
                        disabled={isUploadingImage}
                    >
                        {isUploadingImage ? '업로드 중' : '이미지'}
                    </button>
                    <input
                        ref={imageInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                    />
                </div>
            </div>
            <div className="bg-[#F7F7F5] p-5">
                <div className="mx-auto max-w-[820px] overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
                    <EditorContent editor={editor} />
                </div>
            </div>
        </div>
    );
}
