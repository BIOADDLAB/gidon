'use client';

import SectionHeading from './common/SectionHeading';

export default function FaqSection() {
    return (
        <section className="relative w-full pt-[100px] pb-[130px] overflow-hidden pt-[100px] pb-[130px] flex flex-col items-center">
            <picture className="absolute inset-0 w-full h-full -z-10">
                <source srcSet="images/bg_faq.webp" type="image/webp" />
                <img src="images/bg_faq.jpg" alt="배경 이미지" className="w-full h-full object-cover object-center" />
            </picture>
            <div className="w-full max-w-[930px] px-4">
                <SectionHeading topTitle="Q & A" centerTitle="자주 묻는 질문" desc="" isDesc={false} />

                {/*질문 영역 */}
                <ul>
                    <li className="py-[36px]">
                        <div>
                            <span>1</span>
                            <p>
                                <img src="images/arr_down.png" alt="Q&A 열기 버튼" />
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}
