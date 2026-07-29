'use client';

import React, { useState } from 'react';
import SectionHeading from './common/SectionHeading';
import PrivacyPolicyModal from './common/PrivacyPolicyModal';

export default function AskForm() {
    const [isChecked, setIsChecked] = useState(false);
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isChecked) {
            alert('개인정보취급방침에 동의해주세요.');
            return;
        }

        const form = e.currentTarget;
        setIsSubmitting(true);
        setSubmitMessage('');
        setSubmitStatus('');

        try {
            const formData = new FormData(form);
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: formData,
            });
            const result = (await response.json()) as { success: boolean; error?: string };

            if (!response.ok || !result.success) {
                throw new Error(result.error ?? '상담 신청 전송에 실패했습니다.');
            }

            form.reset();
            setIsChecked(false);
            setSubmitStatus('success');
            setSubmitMessage('상담 신청이 접수되었습니다. 빠르게 연락드리겠습니다.');
        } catch (error) {
            setSubmitStatus('error');
            setSubmitMessage(error instanceof Error ? error.message : '상담 신청 전송에 실패했습니다.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="bg-white max-w-[860px] 2xl:max-w-[1020px] mx-auto mb-[30px] md:mb-[40px] pt-[30px] md:pt-[40px] pb-[50px] md:pb-[68px] rounded-[10px]">
                    <SectionHeading
                        topTitle="Consultation"
                        centerTitle="간단 문의하기"
                        desc="궁금한 점을 남겨주시면 정성을 다해 답변해 드리겠습니다."
                    />

                <div className="max-w-[660px] 2xl:max-w-[780px] mx-auto mt-[50px] md:mt-[70px] px-4 md:px-0">
                    <div className="mb-[30px] md:mb-[40px]">
                        <label
                            htmlFor="name"
                            className="block mb-[2px] text-[17px] md:text-[18px] lg:text-[20px] font-semibold cursor-pointer"
                        >
                            성함 Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="성함을 입력해주세요."
                            className="py-[10px] w-full block border-b border-black placeholder:text-[#757776] focus:outline-none text-[15px] md:text-base"
                        />
                    </div>
                    <div className="mb-[30px] md:mb-[40px]">
                        <label
                            htmlFor="phone"
                            className="block mb-[2px] text-[17px] md:text-[18px] lg:text-[20px] font-semibold cursor-pointer"
                        >
                            연락처 Phone Number
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            placeholder="010-0000-0000"
                            className="py-[10px] w-full block border-b border-black placeholder:text-[#757776] focus:outline-none text-[15px] md:text-base"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="block mb-[2px] text-[17px] md:text-[18px] lg:text-[20px] font-semibold cursor-pointer"
                        >
                            내용 Text
                        </label>
                        <input
                            id="message"
                            name="message"
                            type="text"
                            required
                            placeholder="문의하실 내용을 자유롭게 입력해주세요."
                            className="py-[10px] w-full block border-b border-black placeholder:text-[#757776] focus:outline-none text-[15px] md:text-base"
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center font-medium text-green-600 mb-[24px] md:mb-[30px]">
                <input
                    type="checkbox"
                    id="agree"
                    required
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className="sr-only peer"
                />
                <label
                    htmlFor="agree"
                    className="pl-[30px] pr-1 cursor-pointer select-none relative h-[22px] flex items-center bg-no-repeat bg-left bg-contain
                               bg-[url('/images/common/check_off.png')] 
                               peer-checked:bg-[url('/images/common/check_on.png')]
                               text-[14px] md:text-base"
                >
                    개인정보취급방침에 동의
                </label>
                <button
                    type="button"
                    className="underline z-10 text-[14px] md:text-base"
                    onClick={() => setIsPrivacyOpen(true)}
                >
                    [자세히 보기]
                </button>
            </div>

            {submitMessage && (
                <p
                    className={`mx-auto mb-5 max-w-[660px] rounded-2xl px-5 py-4 text-center text-sm font-bold ${
                        submitStatus === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'
                    }`}
                >
                    {submitMessage}
                </p>
            )}

            <div className="flex justify-center">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex justify-center items-center text-center text-[17px] md:text-[18px] lg:text-[20px] font-bold text-white gap-[10px] bg-green-600 py-[14px] md:py-[16px] px-[48px] md:px-[65px] rounded-[33px] hover:bg-[#233b32] transition-colors"
                >
                    {isSubmitting ? '전송 중...' : '상담 신청하기'} <span>&gt;</span>
                </button>
            </div>
            {isPrivacyOpen && <PrivacyPolicyModal onClose={() => setIsPrivacyOpen(false)} />}
        </form>
        </>
    );
}
