import React from 'react';
import KakaoMap from './KakaoMap';

export default function MapSection() {
    return (
        // #STYLE: py 대화면 확장
        <section className="bg-[#F4F3EB] py-[60px] md:py-[70px] 2xl:py-[90px] px-4">
            {/* #STYLE: 태블릿(md)부터 세로 정렬, lg부터 가로 정렬 / max-w 대화면 확장 */}
            <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-15 items-stretch">
                {/* #STYLE: KakaoMap이 h-full 의존 구조라 부모가 높이를 명시해야 함.
                    모바일/태블릿(세로 배치)에서는 고정 높이(h-[320px]~[400px]), lg(가로 배치)부터는 부모 stretch에 맡김 */}
                <div className="w-full lg:w-[50%] h-[320px] md:h-[400px] lg:h-auto shrink-0">
                    <KakaoMap />
                </div>

                {/* 상세 정보 텍스트 영역 */}
                <address className="w-full lg:w-[50%] flex flex-col justify-center not-italic">
                    <ul className="py-3 md:py-5">
                        <li className="flex gap-6 md:gap-14.25 pb-3 md:pb-3.75 border-b border-[#3C3C3C] mb-3 md:mb-3.75">
                            <h3 className="font-semibold text-green-600 w-16 md:w-20 shrink-0 text-[15px] md:text-base">
                                오시는 길
                            </h3>
                            <p className="text-ink-900 text-[15px] md:text-[17px] lg:text-[18px] break-keep leading-relaxed">
                                경기도 성남시 중원구 성남대로 1126,
                                {/* #STYLE반응형줄바꿈: 모바일 좁은 폭에서만 줄바꿈, md부터는 한 줄로 이어짐 */}
                                <br className="block md:hidden" /> 메가프라자 3층
                            </p>
                        </li>

                        <li className="flex gap-6 md:gap-14.25 pb-3 md:pb-3.75 border-b border-[#3C3C3C] mb-3 md:mb-3.75">
                            <h3 className="font-semibold text-green-600 w-16 md:w-20 shrink-0 text-[15px] md:text-base">
                                문의 전화
                            </h3>
                            {/* #LINK: 실제 전화번호 교체 필요 */}
                            <p className="text-ink-900 text-[15px] md:text-[17px] lg:text-[18px]">00-000-0000</p>
                        </li>

                        <li className="flex gap-6 md:gap-14.25 pb-3 md:pb-3.75 border-b border-[#3C3C3C] mb-3 md:mb-3.75">
                            <h3 className="font-semibold text-green-600 w-16 md:w-20 shrink-0 text-[15px] md:text-base">
                                진료 시간
                            </h3>
                            <div>
                                <div className="flex gap-4 md:gap-4.5 mb-2 md:mb-2.5">
                                    <div className="text-ink-900 text-[15px] md:text-[17px] lg:text-[18px] w-[72px] md:w-19.25 flex justify-between">
                                        <span className="sr-only">월화목</span>
                                        <span aria-hidden="true">월</span>
                                        <span aria-hidden="true">화</span>
                                        <span aria-hidden="true">목</span>
                                    </div>
                                    <span className="text-ink-900 text-[15px] md:text-[17px] lg:text-[18px]">
                                        10:00~19:00
                                    </span>
                                </div>
                                <div className="flex gap-4 md:gap-4.5 mb-2 md:mb-2.5">
                                    <div className="text-ink-900 text-[15px] md:text-[17px] lg:text-[18px] w-[72px] md:w-19.25 flex justify-between">
                                        <span className="sr-only">수토</span>
                                        <span aria-hidden="true">수</span>
                                        <span aria-hidden="true">토</span>
                                    </div>
                                    <span className="text-ink-900 text-[15px] md:text-[17px] lg:text-[18px]">
                                        10:00~16:00
                                    </span>
                                </div>
                                <div className="flex gap-4 md:gap-4.5 mb-2 md:mb-2.5">
                                    <div className="text-ink-900 text-[15px] md:text-[17px] lg:text-[18px] w-[72px] md:w-19.25 flex justify-between">
                                        <span className="sr-only">금요일</span>
                                        <span aria-hidden="true">금</span>
                                        <span aria-hidden="true">요</span>
                                        <span aria-hidden="true">일</span>
                                    </div>
                                    <span className="text-ink-900 text-[15px] md:text-[17px] lg:text-[18px]">
                                        10:00~20:00
                                    </span>
                                </div>
                                <div className="flex gap-4 md:gap-4.5">
                                    <div className="text-ink-900 text-[15px] md:text-[17px] lg:text-[18px] w-[72px] md:w-19.25 flex justify-between">
                                        <span className="sr-only">일요일과 공휴일</span>
                                        <span aria-hidden="true">일</span>
                                        <span aria-hidden="true">/</span>
                                        <span aria-hidden="true">공휴일</span>
                                    </div>
                                    <span className="text-ink-900 text-[15px] md:text-[17px] lg:text-[18px]">휴진</span>
                                </div>
                            </div>
                        </li>

                        <li className="flex gap-6 md:gap-14.25 pb-3 md:pb-3.75 border-b border-[#3C3C3C] mb-3 md:mb-3.75">
                            <h3 className="font-semibold text-green-600 w-16 md:w-20 shrink-0 text-[15px] md:text-base">
                                지하철
                            </h3>
                            <p className="text-ink-900 text-[15px] md:text-[17px] lg:text-[18px] break-keep leading-relaxed">
                                모란역 4번 출구 나와서 도보 1분
                                {/* #STYLE반응형줄바꿈: 모바일에서만 줄바꿈, md부터 한 줄 */}
                                <br className="block md:hidden" /> 좌측 은행 건물(다이소 옆)
                            </p>
                        </li>

                        <li className="flex gap-6 md:gap-14.25 pb-3 md:pb-3.75 border-b border-[#3C3C3C] mb-3 md:mb-3.75">
                            <h3 className="font-semibold text-green-600 w-16 md:w-20 shrink-0 text-[15px] md:text-base">
                                주차
                            </h3>
                            <p className="text-ink-900 text-[15px] md:text-[17px] lg:text-[18px] break-keep">
                                건물 뒷편 기계식 카리프트 이용
                            </p>
                        </li>
                    </ul>
                </address>
            </div>
        </section>
    );
}
