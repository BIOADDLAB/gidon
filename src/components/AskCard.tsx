export default function AskCard() {
    return (
        // #STYLE: 모바일 flex-col, md 이상 flex-row / max-w 대화면 확장
        <div className="max-w-[860px] 2xl:max-w-[1020px] mx-auto flex flex-col md:flex-row justify-between items-stretch gap-[16px] md:gap-[22px] mb-8 md:mb-10">
            {/* 전화예약 카드 */}
            <div className="bg-white rounded-[10px] shadow-[2px_4px_6px_0_rgba(65,74,63,0.3)] w-full md:w-[420px] 2xl:w-[490px]">
                <div className="text-center py-3 md:py-3.5 bg-green-600 rounded-t-[10px]">
                    <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-white">전화 예약</h3>
                </div>
                <div className="py-[24px] md:py-[30px] h-auto md:h-[220px] text-center flex flex-col justify-between items-center gap-4">
                    <p className="text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-green-600">
                        대표 상담번호 <br />
                        <b className="block text-[28px] md:text-[30px] lg:text-[32px] font-extrabold mt-[6px] mb-[10px] md:mb-[16px]">
                            0000-0000
                        </b>
                    </p>
                    {/* #LINK: 전화번호 실제 번호로 교체 필요 */}
                    <a
                        href="tel:0000-0000"
                        className="flex px-5 md:px-6 py-3 gap-2 justify-center items-center bg-paper text-[17px] md:text-[18px] lg:text-[20px] font-bold text-green-600 rounded-full border border-green-600 w-fit mx-auto"
                    >
                        <img
                            src="/images/common/l_ask_phone.png"
                            className="w-[24px] md:w-[27px] block"
                            alt="전화기 아이콘"
                        />
                        전화걸기
                    </a>
                </div>
            </div>

            {/* 채널상담 카드 */}
            <div className="bg-white rounded-[10px] shadow-[2px_4px_6px_0_rgba(65,74,63,0.3)] w-full md:w-[420px] 2xl:w-[490px]">
                <div className="text-center py-3 md:py-3.5 bg-green-600 rounded-t-[10px]">
                    <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-white">
                        카카오톡 채널 상담
                    </h3>
                </div>
                <div className="py-[24px] md:py-[30px] h-auto md:h-[220px] text-center flex flex-col justify-between gap-4">
                    <p className="text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-green-600">
                        채팅으로 <br />
                        간편하게 문의하세요.
                    </p>
                    {/* #LINK: 카카오 채널 실제 URL 교체 필요 */}
                    <a
                        href="https://pf.kakao.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex px-5 md:px-6 py-3 gap-2.5 justify-center items-center bg-paper text-[17px] md:text-[18px] lg:text-[20px] font-bold text-green-600 rounded-full border border-green-600 w-fit mx-auto"
                    >
                        <img
                            src="/images/common/l_ask_kakao.png"
                            className="w-[28px] md:w-[31px] block"
                            alt="카카오톡 아이콘"
                        />
                        채팅하기
                    </a>
                </div>
            </div>
        </div>
    );
}
