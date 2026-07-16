import KakaoMap from './KakaoMap';

export default function MapSection() {
    return (
        <section className="bg-[#F4F3EB] py-[60px] md:py-[70px] 2xl:py-[90px] px-4">
            <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-15 items-stretch">
                <div className="w-full lg:w-[50%] h-[320px] md:h-[400px] lg:h-auto shrink-0">
                    <KakaoMap />
                </div>

                <address className="w-full lg:w-[50%] flex flex-col justify-center not-italic">
                    <ul className="py-3 md:py-5">
                        <li className="flex gap-6 md:gap-14.25 pb-3 md:pb-3.75 border-b border-[#3C3C3C] mb-3 md:mb-3.75">
                            <h3 className="font-semibold text-green-600 w-16 md:w-20 shrink-0 text-[15px] md:text-base">
                                오시는 길
                            </h3>
                            <p className="text-ink-900 text-[15px] md:text-[17px] lg:text-[18px] break-keep leading-relaxed">
                                경기도 성남시 중원구 성남대로 1126,
                                <br className="block md:hidden" /> 메가프라자 3층
                            </p>
                        </li>

                        <li className="flex gap-6 md:gap-14.25 pb-3 md:pb-3.75 border-b border-[#3C3C3C] mb-3 md:mb-3.75">
                            <h3 className="font-semibold text-green-600 w-16 md:w-20 shrink-0 text-[15px] md:text-base">
                                문의 전화
                            </h3>
                            <p className="text-ink-900 text-[15px] md:text-[17px] lg:text-[18px]">1522-7528</p>
                        </li>

                        <li className="flex gap-6 md:gap-14.25 pb-3 md:pb-3.75 border-b border-[#3C3C3C] mb-3 md:mb-3.75">
                            <h3 className="font-semibold text-green-600 w-16 md:w-20 shrink-0 text-[15px] md:text-base">
                                진료 시간
                            </h3>
                            <div>
                                <div className="flex items-start gap-4 md:gap-4.5 mb-2.5 md:mb-3.5">
                                    <div className="text-ink-900 text-[15px] md:text-[17px] lg:text-[18px] w-[72px] md:w-19.25 flex justify-between shrink-0">
                                        <span className="sr-only">월요일과 목요일</span>
                                        <span aria-hidden="true">월</span>
                                        <span aria-hidden="true">/</span>
                                        <span aria-hidden="true">목</span>
                                    </div>
                                    <span className="text-ink-900 text-[15px] md:text-[17px] lg:text-[18px]">
                                        09:00~20:00
                                        <br className="hidden max-[374px]:block" />
                                        <span className="ml-1 text-[15px] break-all md:text-[16.5px] font-medium">
                                            (야간진료)
                                        </span>
                                    </span>
                                </div>
                                <div className="flex items-start gap-4 md:gap-4.5 mb-2.5 md:mb-3.5">
                                    <div className="text-ink-900 text-[15px] md:text-[17px] lg:text-[18px] w-[72px] md:w-19.25 flex justify-between shrink-0">
                                        <span className="sr-only">화,수,금요일</span>
                                        <span aria-hidden="true">화</span>
                                        <span aria-hidden="true">수</span>
                                        <span aria-hidden="true">금</span>
                                    </div>
                                    <span className="text-ink-900 text-[15px] md:text-[17px] lg:text-[18px]">
                                        09:00~18:00
                                    </span>
                                </div>
                                <div className="flex items-start gap-4 md:gap-4.5 mb-2.5 md:mb-3.5">
                                    <div className="text-ink-900 text-[15px] md:text-[17px] lg:text-[18px] w-[72px] md:w-19.25 flex justify-between shrink-0">
                                        <span className="sr-only">토요일</span>
                                        <span aria-hidden="true">토</span>
                                        <span aria-hidden="true">요</span>
                                        <span aria-hidden="true">일</span>
                                    </div>
                                    <span className="text-ink-900 text-[15px] md:text-[17px] lg:text-[18px]">
                                        09:00~13:00
                                    </span>
                                </div>
                                <div className="flex items-start gap-4 md:gap-4.5 mb-2.5 md:mb-3.5">
                                    <div className="text-ink-900 text-[15px] md:text-[17px] lg:text-[18px] w-[72px] md:w-19.25 flex justify-between shrink-0">
                                        <span className="sr-only">점심시간</span>
                                        <span aria-hidden="true">점</span>
                                        <span aria-hidden="true">심</span>
                                        <span aria-hidden="true">시</span>
                                        <span aria-hidden="true">간</span>
                                    </div>
                                    <span className="text-ink-900 text-[15px] md:text-[17px] lg:text-[18px]">
                                        12:30~14:00
                                    </span>
                                </div>
                                <div className="flex items-start gap-4 md:gap-4.5">
                                    <div className="text-ink-900 text-[15px] md:text-[17px] lg:text-[18px] w-[72px] md:w-19.25 flex justify-between shrink-0">
                                        <span className="sr-only">일요일과 공휴일</span>
                                        <span aria-hidden="true">일</span>
                                        <span aria-hidden="true">/</span>
                                        <span aria-hidden="true">공휴일</span>
                                    </div>
                                    <span className="text-ink-900 text-[15px] md:text-[17px] lg:text-[18px] text-[#AE4F4F]">
                                        휴진
                                    </span>
                                </div>
                            </div>
                        </li>

                        <li className="flex gap-6 md:gap-14.25 pb-3 md:pb-3.75 border-b border-[#3C3C3C] mb-3 md:mb-3.75">
                            <h3 className="font-semibold text-green-600 w-16 md:w-20 shrink-0 text-[15px] md:text-base">
                                지하철
                            </h3>
                            <p className="text-ink-900 text-[15px] md:text-[17px] lg:text-[18px] break-keep leading-relaxed">
                                모란역 4번 출구 나와서 도보 1분
                                <br className="block md:hidden" /> 좌측 은행 건물(다이소 옆)
                            </p>
                        </li>

                        <li className="flex gap-6 md:gap-14.25 pb-3 md:pb-3.75 border-b border-[#3C3C3C] mb-3 md:mb-3.75">
                            <h3 className="font-semibold text-green-600 w-16 md:w-20 shrink-0 text-[15px] md:text-base">
                                버스
                            </h3>
                            <p className="text-ink-900 text-[15px] md:text-[17px] lg:text-[18px] break-keep leading-relaxed">
                                모란역 4번출구 정류장에서 도보로 들어오는 길
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
