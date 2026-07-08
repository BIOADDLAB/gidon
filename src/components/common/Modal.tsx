import React, { useEffect } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4" onClick={onClose}>
            <div
                className="bg-white w-full max-w-[540px] rounded-[12px] overflow-hidden flex flex-col shadow-xl max-h-[80vh]"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center px-6 py-4 border-b border-[#e5e7eb]">
                    <h3 className="text-[18px] font-bold text-black">{title}</h3>
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-gray-400 hover:text-black text-[24px] font-light leading-none cursor-pointer"
                    >
                        &times;
                    </button>
                </div>

                <div className="p-6 overflow-y-auto text-[14px] leading-relaxed text-[#555] whitespace-pre-wrap break-keep">
                    {children}
                </div>

                <div className="px-6 py-3.5 border-t border-[#e5e7eb] flex justify-end">
                    <button
                        type="button"
                        onClick={onClose}
                        className="bg-green-600 text-white font-bold text-[14px] px-5 py-2 rounded-[6px] hover:bg-[#233b32] transition-colors cursor-pointer"
                    >
                        확인
                    </button>
                </div>
            </div>
        </div>
    );
}
