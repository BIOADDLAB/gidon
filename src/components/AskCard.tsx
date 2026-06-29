export default function AskCard() {
    return (
        <div className="max-w-[860px] mx-auto flex justify-between items-center gap-[22px] mb-10">
            {/* 전화예약 카드 */}
            <div className="bg-white rounded-[10px] shadow-[2px_4px_6px_0_rgba(65,74,63,0.3)] w-[420px]">
                <div className="text-center py-3.5 bg-green-600 rounded-t-[10px]">
                    <h3 className="text-[24px] font-bold text-white">전화 예약</h3>
                </div>
                <div className="py-[30px] h-[220px] text-center flex flex-col justify-between items-center">
                    <p className="text-[24px] font-semibold text-green-600">
                        대표 상담번호 <br />
                        <b className="block text-[32px] font-extrabold mt-[6px] mb-[16px]">0000-0000</b>
                    </p>
                    <a
                        href="tel:0000-0000"
                        className="flex px-6 py-3 gap-2 justify-center items-center bg-paper text-[20px] font-bold text-green-600 rounded-full border border-green-600 w-fit mx-auto"
                    >
                        <img src="/images/common/l_ask_phone.png" className="w-[27px] block" alt="전화기 아이콘" />
                        전화걸기
                    </a>
                </div>
            </div>

            {/* 채널상담 카드 */}
            <div className="bg-white rounded-[10px] shadow-[2px_4px_6px_0_rgba(65,74,63,0.3)] w-[420px]">
                <div className="text-center py-3.5 bg-green-600 rounded-t-[10px]">
                    <h3 className="text-[24px] font-bold text-white">카카오톡 채널 상담</h3>
                </div>
                <div className="py-[30px] h-[220px] text-center flex flex-col justify-between">
                    <p className="text-[24px] font-semibold text-green-600 mb-[24px]">
                        채팅으로 <br />
                        간편하게 문의하세요.
                    </p>
                    <a
                        href="https://pf.kakao.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex px-6 py-3 gap-2.5 justify-center items-center bg-paper text-[20px] font-bold text-green-600 rounded-full border border-green-600 w-fit mx-auto"
                    >
                        <img src="/images/common/l_ask_kakao.png" className="w-[31px] block" alt="카카오톡 아이콘" />
                        채팅하기
                    </a>
                </div>
            </div>
        </div>
    );
}
