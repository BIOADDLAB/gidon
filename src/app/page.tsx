export default function Home() {
    return (
        <>
            <div className="font-sans font-light text-4xl">한글 폰트 테스트 Asta Sans</div>
            <div className="font-sans font-medium text-4xl">한글 폰트 테스트 Asta Sans</div>
            <div className="font-sans font-bold text-4xl">한글 폰트 테스트 Asta Sans</div>
            <div className="font-sans font-black text-4xl">한글 폰트 테스트 Asta Sans</div>
            <div className="font-ui font-light text-4xl">한글 폰트 테스트 SUIT</div>
            <div className="font-ui font-medium text-4xl">한글 폰트 테스트 SUIT</div>
            <div className="font-ui font-bold text-4xl">한글 폰트 테스트 SUIT</div>
            <div className="font-ui font-black text-4xl">한글 폰트 테스트 SUIT</div>
            <div className="font-accent font-light text-4xl">CLINIC</div>

            <section className="bg-[radial-gradient(circle_at_0%_100%,rgba(150,168,147,0.55)_0%,transparent_0%),linear-gradient(10deg,#96A893_0%,#E0E7DF_65%,#f8f8f8_100%)]">
                <div className="pt-20 text-center mb-[60px]">
                    <p className="font-accent text-sm text-[#213225] mb-2">Contact GIDEON</p>
                    <h2 className="text-[40px] font-bold text-[#213225] mb-[30px]">간편 상담</h2>
                    <h3 className="text-5 text-[#19251e]">상담부터 예약까지, 원하시는 방법으로 간편하게 문의하세요.</h3>
                </div>

                {/* 예약 영역 */}
                <div className="max-w-[860px] mx-auto flex justify-between items-center gap-[22px] mb-10">
                    {/* 전화예약 */}
                    <div className="bg-white rounded-[10px] shadow-[2px_4px_6px_0_rgba(65,74,63,0.3)] w-[420px] ">
                        <div className="text-center py-3.5 bg-green-600 rounded-t-[10px]">
                            <h4 className="text-[24px] font-bold text-white">전화 예약</h4>
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
                                <img
                                    src="images/common/l_ask_phone.png"
                                    className="w-[27px] block"
                                    alt="전화 걸기 아이콘"
                                />
                                전화걸기
                            </a>
                        </div>
                    </div>

                    {/* 채널상담 */}
                    <div className="bg-white rounded-[10px] shadow-[2px_4px_6px_0_rgba(65,74,63,0.3)] w-[420px]">
                        <div className="text-center py-3.5 bg-green-600 rounded-t-[10px]">
                            <h4 className="text-[24px] font-bold text-white">카카오톡 채널 상담</h4>
                        </div>
                        <div className="py-[30px] h-[220px]  text-center flex flex-col justify-between">
                            <p className="text-[24px] font-semibold text-green-600 mb-[24px]">
                                채팅으로 <br />
                                간편하게 문의하세요.
                            </p>

                            <a
                                href="tel:0000-0000"
                                className="flex px-6 py-3 gap-2 justify-center items-center bg-paper text-[20px] font-bold text-green-600 rounded-full border border-green-600 w-fit mx-auto"
                            >
                                <img
                                    src="images/common/l_ask_kakao.png"
                                    className="w-[31px] block"
                                    alt="전화 걸기 아이콘"
                                />
                                전화걸기
                            </a>
                        </div>
                    </div>
                </div>

                {/* 이름 회원정보 영역 */}
                <form action="">
                    <div className=" bg-white max-w-[860px] mx-auto mb-[40px] pt-[40px] pb-[68px] rounded-[10px]">
                        <p className="text-center font-accent text-[20px] text-[#213225] mb-2">Consultation</p>
                        <h2 className="text-center text-[40px] font-bold text-[#213225] mb-[24px]">간단 문의하기</h2>
                        <h3 className="text-center text-[20px] text-[#19251e]">
                            궁금한 점을 남겨주시면 정성을 다해 답변해 드리겠습니다.
                        </h3>

                        <div className="max-w-[660px] mx-auto mt-[70px]">
                            <div className="mb-[40px]">
                                <label htmlFor="name" className="block mb-[2px] text-[20px] font-semibold">
                                    성함 Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="성함을 입력해주세요."
                                    className="py-[10px] w-full block border-b border-black placeholder:text-[#757776]"
                                />
                            </div>
                            <div className="mb-[40px]">
                                <label htmlFor="phone" className="block mb-[2px] text-[20px] font-semibold">
                                    연락처 Phone Number
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
                                    placeholder="010-0000-0000"
                                    className="py-[10px] w-full block border-b border-black placeholder:text-[#757776]"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-[2px] text-[20px] font-semibold">
                                    내용 Text
                                </label>
                                <input
                                    id="message"
                                    type="text"
                                    placeholder="문의하실 내용을 자유롭게 입력해주세요."
                                    className="py-[10px] w-full block border-b border-black placeholder:text-[#757776]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center font-medium text-green-600 mb-[30px]">
                        <input
                            type="checkbox"
                            id="agree"
                            className="w-[18px] h-[18px] rounded-[4px] border border-gray-400 accent-green-600 cursor-pointer"
                        />
                        <label htmlFor="agree" className="pl-2 pr-1 cursor-pointer">
                            개인정보취급방침에 동의
                        </label>
                        <a href="" className="underline">
                            [자세히 보기]
                        </a>
                    </div>

                    <div className="flex justify-center pb-[130px]">
                        <button
                            type="submit"
                            className="flex justify-center items-center text-center text-[20px] font-bold text-white gap-[10px] bg-green-600 py-[16px] px-[65px] rounded-[33px]"
                        >
                            상담 신청하기 <span>&gt;</span>
                        </button>
                    </div>
                </form>
            </section>

            {/* 오시는 길 */}
            <section>
                <div className="max-w-[1280px] mx-auto">
                    {/* 지도영역 */}
                    <div className="relative">
                        {/* #ISSUE: 카카오 지도 연결 필요 */}
                        <div></div>
                        <div>
                            <a href="">네이버지도로 보기</a>
                            <a href="">구글지도로 보기</a>
                        </div>
                    </div>

                    {/* 병원정보 영역 */}
                    <div>
                        <ul>
                            <li className="pb-[15px] flex items-center border-b border-[#3c3c3c]">
                                <h3 className="text-[#2B483C] font-semibold w-[126px]">오시는 길</h3>
                                <p className="text-[18px] text-[#2d2d2d]">
                                    경기도 성남시 중원구 성남대로 1126, 메가프라자 3층
                                </p>
                            </li>
                            <li className="pb-[15px] flex items-center border-b border-[#3c3c3c]">
                                <h3 className="text-[#2B483C] font-semibold w-[126px]"></h3>
                                <p className="text-[18px] text-[#2d2d2d]"></p>
                            </li>
                            <li className="pb-[15px] flex items-center border-b border-[#3c3c3c]">
                                <h3 className="text-[#2B483C] font-semibold w-[126px]"></h3>
                                <p className="text-[18px] text-[#2d2d2d]"></p>
                            </li>
                            <li className="pb-[15px] flex items-center border-b border-[#3c3c3c]">
                                <h3 className="text-[#2B483C] font-semibold w-[126px]"></h3>
                                <p className="text-[18px] text-[#2d2d2d]"></p>
                            </li>
                            <li className="pb-[15px] flex items-center border-b border-[#3c3c3c]">
                                <h3 className="text-[#2B483C] font-semibold w-[126px]"></h3>
                                <p className="text-[18px] text-[#2d2d2d]"></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
