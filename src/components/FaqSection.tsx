'use client';

import { useState } from 'react';
import SectionHeading from './common/SectionHeading';

interface FaqItem {
    id: number;
    question: string;
    answer: string;
}

export default function FaqSection() {
    const [openId, setOpenId] = useState<number | null>(null);
    const faqList: FaqItem[] = [
        {
            id: 1,
            question: 'AI 구강스캔을 통해 정밀한 진단 진행',
            answer: '3D CT 촬영과 구간 검진을 통해 치아와 잇몸 상태를 \n분석하고, 가상 모의 수술로 식립 위치를 계획합니다.',
        },
        {
            id: 2,
            question: '보험 임플란트는 몇 개까지 적용되나요?',
            answer: '건강보험 임플란트는 평생 2개까지 적용받으실 수 있습니다.',
        },
        {
            id: 3,
            question: '치료 도중 다른 치과로 옮길 수 있나요?',
            answer: '보험 적용 후 치료가 시작된 후에는 중도에 치과를 변경하기 어려우므로\n치료 전 충분한 상담 후 결정하시기 바랍니다.',
        },
        {
            id: 4,
            question: '만 65세 이상이면 누구나 보험 적용이 가능한가요?',
            answer: '만 65세 이상 건강보험 가입자 중 치아가 1개 이상 남아 있는 경우\n보험 적용이 가능합니다.',
        },
    ];

    const handleToggle = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="relative w-full pt-[100px] pb-[130px] overflow-hidden flex flex-col items-center">
            <picture className="absolute inset-0 w-full h-full -z-10">
                <source srcSet="images/bg_faq.webp" type="image/webp" />
                <img src="images/bg_faq.jpg" alt="배경 이미지" className="w-full h-full object-cover object-center" />
            </picture>

            <div className="w-full max-w-[930px] px-4">
                <SectionHeading topTitle="Q & A" centerTitle="자주 묻는 질문" desc="" isDesc={false} />

                {/* 질문 영역 */}
                <ul className="mt-[58px]">
                    {faqList.map((item) => {
                        const isOpen = openId === item.id;

                        return (
                            <li
                                key={item.id}
                                // 💡 1. first:border-green-600을 추가해서 첫 번째 리스트의 윗줄만 초록색으로 포인트를 줍니다!
                                className={`border-t transition-all duration-300 ${
                                    isOpen ? 'border-gray-600 pb-5' : 'border-[#babbb7]'
                                } first:border-green-600 last:border-b last:border-[#babbb7]`}
                            >
                                <div
                                    className={`pt-[36px] pb-[26px] px-[48px] transition-colors duration-300 ${
                                        isOpen ? 'bg-green-600 rounded-b-[15px]' : 'bg-transparent'
                                    }`}
                                >
                                    <div className="flex gap-4">
                                        {/* 왼쪽 영역 (원형 번호 박스) */}
                                        <div
                                            className={`w-[35px] h-[35px] rounded-full flex items-center justify-center shrink-0 transition-colors mt-1 ${
                                                isOpen ? 'bg-white' : 'bg-green-600'
                                            }`}
                                        >
                                            <span
                                                className={`text-[18px] font-extrabold transition-colors ${isOpen ? 'text-green-600' : 'text-white'}`}
                                            >
                                                {item.id}
                                            </span>
                                        </div>

                                        {/* 오른쪽 영역 (질문 버튼 + 답변) */}
                                        <div className="grow">
                                            {/* 질문과 화살표를 묶은 버튼 영역 */}
                                            <button
                                                type="button"
                                                onClick={() => handleToggle(item.id)}
                                                className="w-full flex items-center text-left focus:outline-none pb-[10px] pt-1"
                                                aria-expanded={isOpen}
                                            >
                                                <h3
                                                    className={`text-[25px] font-semibold transition-colors ${isOpen ? 'text-white' : 'text-[#3d3e3c]'}`}
                                                >
                                                    {item.question}
                                                </h3>

                                                <div className="ml-auto shrink-0 pl-4">
                                                    <img
                                                        src={isOpen ? 'images/arr_up.png' : 'images/arr_down.png'}
                                                        alt=""
                                                        className="w-[16px]"
                                                    />
                                                </div>
                                            </button>

                                            {/* 답변 영역 */}
                                            {isOpen && (
                                                <div className="whitespace-pre-line animate-fade-in">
                                                    <p className="text-[18px] font-medium mt-4 text-white leading-relaxed pb-3">
                                                        {item.answer}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
