import React from 'react';
import KakaoMap from './KakaoMap';

export default function MapSection() {
    return (
        <section className="bg-[#F4F3EB] py-15 md:py-17.5 px-4">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-15 items-stretch">
                {/* 왼쪽: 지도 영역 (전체 너비의 절반 가량 차지) */}
                <div className="w-full lg:w-[50%] shrink-0">
                    <KakaoMap />
                </div>

                {/* 오른쪽: 상세 정보 텍스트 영역 */}
                <div className="w-full lg:w-[50%] flex flex-col justify-center">
                    <ul className="py-5">
                        {/* 1. 오시는 길 */}
                        <li className="flex gap-14.25 pb-3.75 border-b border-[#3C3C3C] mb-3.75">
                            <h3 className="font-semibold text-green-600 w-20">오시는 길</h3>
                            <div>
                                <p className="text-ink-900 text-[18px]">
                                    경기도 성남시 중원구 성남대로 1126, 메가프라자 3층
                                </p>
                            </div>
                        </li>

                        {/* 2. 문의 전화 */}
                        <li className="flex gap-14.25 pb-3.75 border-b border-[#3C3C3C] mb-3.75">
                            <h3 className="font-semibold text-green-600 w-20">문의 전화</h3>
                            <div>
                                <p className="text-ink-900 text-[18px]">00-000-0000</p>
                            </div>
                        </li>

                        {/* 3. 진료 시간 (SEO 우회 태그 반영 영역) */}
                        <li className="flex gap-14.25 pb-3.75 border-b border-[#3C3C3C] mb-3.75">
                            <h3 className="font-semibold text-green-600 w-20">진료 시간</h3>
                            <div className="">
                                {/* 월 화 목 */}
                                <div className="flex gap-4.5 mb-2.5">
                                    <div className="text-ink-900 text-[18px] w-19.25 flex justify-between">
                                        <span className="sr-only">월화목</span>
                                        <span aria-hidden="true">월</span>
                                        <span aria-hidden="true">화</span>
                                        <span aria-hidden="true">목</span>
                                    </div>
                                    <span className="text-ink-900 text-[18px]">10:00~19:00</span>
                                </div>

                                {/* 수 토 */}
                                <div className="flex gap-4.5 mb-2.5">
                                    <div className="text-ink-900 text-[18px] w-19.25 flex justify-between">
                                        <span className="sr-only">수토</span>
                                        <span aria-hidden="true">수</span>
                                        <span aria-hidden="true">토</span>
                                    </div>
                                    <span className="text-ink-900 text-[18px]">10:00~16:00</span>
                                </div>

                                {/* 금 요 일 */}
                                <div className="flex gap-4.5 mb-2.5">
                                    <div className="text-ink-900 text-[18px] w-19.25 flex justify-between">
                                        <span className="sr-only">금요일</span>
                                        <span aria-hidden="true">금</span>
                                        <span aria-hidden="true">요</span>
                                        <span aria-hidden="true">일</span>
                                    </div>
                                    <span className="text-ink-900 text-[18px]">10:00~20:00</span>
                                </div>

                                {/* 일 / 공휴일 */}
                                <div className="flex gap-4.5">
                                    <div className="text-ink-900 text-[18px] w-19.25 flex justify-between">
                                        <span className="sr-only">일요일과 공휴일</span>
                                        <span aria-hidden="true">일</span>
                                        <span aria-hidden="true">/</span>
                                        <span aria-hidden="true">공휴일</span>
                                    </div>
                                    <span className="text-ink-900 text-[18px]">휴진</span>
                                </div>
                            </div>
                        </li>

                        {/* 4. 지하철 */}
                        <li className="flex gap-14.25 pb-3.75 border-b border-[#3C3C3C] mb-3.75">
                            <h3 className="font-semibold text-green-600 w-20">지하철</h3>
                            <div>
                                <p className="text-ink-900 text-[18px]">
                                    모란역 4번 출구 나와서 도보 1분 좌측 은행 건물(다이소 옆)
                                </p>
                            </div>
                        </li>

                        {/* 5. 주차 */}
                        <li className="flex gap-14.25 pb-3.75 border-b border-[#3C3C3C] mb-3.75">
                            <h3 className="font-semibold text-green-600 w-20">주차</h3>
                            <div>
                                <p className="text-ink-900 text-[18px]">건물 뒷편 기계식 카리프트 이용</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
