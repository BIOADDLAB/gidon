'use client';

import { useState } from 'react';
import SectionHeading from './common/SectionHeading';
import Image from 'next/image';

interface FaqItem {
    id: number;
    question: string;
    answer: string;
}

interface FaqSectionProps {
    isBg?: boolean;
}

export default function FaqSection({ isBg = false }: FaqSectionProps) {
    const [openId, setOpenId] = useState<number | null>(null);
    const faqList: FaqItem[] = [
        {
            id: 1,
            question: '치아가 하나도 없어도 보험 임플란트가 가능한가요?',
            answer: '치아가 하나도 없는 무치악 상태는 보험 임플란트 적용 대상이 아닙니다. \n무치악 환자의 경우 보험 틀니 적용 여부를 확인하실 수 있습니다.',
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
            answer: '만 65세 이상 건강보험 가입자 중 치아가 1개 이상 남아 있는 경우 \n보험 적용이 가능합니다.',
        },
    ];

    const handleToggle = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        // #STYLE: py 대화면 확장
        <section className="relative w-full pt-[70px] md:pt-[100px] 2xl:pt-[130px] pb-[90px] md:pb-[130px] 2xl:pb-[160px] overflow-hidden flex flex-col items-center">
            {isBg ? (
                <Image
                    src="/images/bg_reco.jpg"
                    alt="기드온치과 자주 묻는 질문 배경"
                    fill
                    sizes="100vw"
                    className="object-cover object-center -z-10"
                />
            ) : null}

            {/* #STYLE: max-w 대화면 확장 */}
            <div className="w-full max-w-[930px] 2xl:max-w-[1100px] px-4">
                <SectionHeading topTitle="Q & A" centerTitle="자주 묻는 질문" desc="" isDesc={false} />

                <ul className="mt-[40px] md:mt-[58px]">
                    {faqList.map((item) => {
                        const isOpen = openId === item.id;

                        return (
                            <li
                                key={item.id}
                                className={`border-t transition-all duration-300 ${
                                    isOpen ? 'border-gray-600 pb-5' : 'border-[#babbb7]'
                                } first:border-green-600 last:border-b last:border-[#babbb7]`}
                            >
                                <div
                                    className={`pt-[20px] md:pt-[36px] pb-[16px] md:pb-[26px] px-[14px] md:px-[48px] transition-colors duration-300 ${
                                        isOpen ? 'bg-green-600 rounded-b-[10px] md:rounded-b-[15px]' : 'bg-transparent'
                                    }`}
                                >
                                    <div className="flex gap-2.5 md:gap-4">
                                        <div
                                            className={`w-[26px] h-[26px] md:w-[35px] md:h-[35px] rounded-full flex items-center justify-center shrink-0 transition-colors mt-0.5 md:mt-1 ${
                                                isOpen ? 'bg-white' : 'bg-green-600'
                                            }`}
                                        >
                                            <span
                                                className={`text-[13px] md:text-[18px] font-extrabold transition-colors ${isOpen ? 'text-green-600' : 'text-white'}`}
                                            >
                                                {item.id}
                                            </span>
                                        </div>

                                        <div className="grow">
                                            <button
                                                type="button"
                                                onClick={() => handleToggle(item.id)}
                                                className="w-full flex items-start text-left focus:outline-none pb-[6px] md:pb-[10px] pt-0.5 md:pt-1"
                                                aria-expanded={isOpen}
                                            >
                                                {/* #STYLE: 모바일 폰트 추가 축소(14px), leading 더 좁게 조정 — PC 비율 그대로 축소만 한 것보다 압축감 있게 */}
                                                <h3
                                                    className={`text-[14px] md:text-[21px] lg:text-[25px] 2xl:text-[27px] font-semibold transition-colors break-keep leading-[1.4] md:leading-snug ${isOpen ? 'text-white' : 'text-[#3d3e3c]'}`}
                                                >
                                                    {item.question}
                                                </h3>

                                                <div className="ml-auto shrink-0 pl-2.5 md:pl-4 pt-0.5">
                                                    <img
                                                        src={isOpen ? '/images/arr_up.png' : '/images/arr_down.png'}
                                                        alt={isOpen ? '닫기' : '열기'}
                                                        className="w-[12px] md:w-[16px]"
                                                    />
                                                </div>
                                            </button>

                                            {isOpen && (
                                                // #STYLE: 모바일에서는 줄바꿈 없애기 — 데이터(item.answer)의 \n은 PC 폭 기준이라
                                                // 모바일 좁은 폭에서 그대로 쓰면 어색하게 끊김. md 미만은 whitespace-normal로 해제
                                                <div className="animate-fade-in">
                                                    <p className="whitespace-normal md:whitespace-pre-line text-[14px] md:text-[17px] lg:text-[18px] font-medium mt-3 md:mt-4 text-white leading-relaxed pb-3 break-keep">
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
