'use client';
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
    mainTitle: string;
    subTitle: string;
    imgSrc: string;
    isNav?: boolean;
    isGreen?: boolean;
}

export default function HeroSection({ mainTitle, subTitle, imgSrc, isNav, isGreen }: HeroProps) {
    const homeIconSrc = isGreen ? '/images/i_home_w.svg' : '/images/i_home.svg';
    return (
        <section className="flex flex-col justify-center items-center relative h-[400px]">
            <Image
                src={imgSrc}
                alt="배경 이미지"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center -z-10"
            />
            <h2 className="font-accent text-[20px] mb-1.25 text-white">{subTitle}</h2>
            <h1 className="text-[40px] text-white font-hero">{mainTitle}</h1>

            {/* 인페이지 헤더 네비게이션 */}
            {isNav ? (
                <div
                    className={`absolute bottom-0 w-[1000px] mx-auto py-[20px] ${isGreen ? 'bg-green-600 text-white' : 'bg-white/20 text-black'}  rounded-t-[20px]`}
                >
                    <div className="flex items-center gap-[140px] pl-[88px] ">
                        {/* 왼쪽 홈 로고 & 페이지 */}
                        <div className="flex items-center gap-[46px]">
                            <Link className="block p-1" href="/">
                                <img src={homeIconSrc} alt="홈 바로가기 버튼" className="w-[18px] h-[18px] block" />
                            </Link>
                            <h3 className="font-ui p-1">임플란트</h3>
                        </div>
                        {/* 오른쪽 네비게이션 */}
                        <div className="flex items-center gap-[40px]">
                            <Link className="p-1" href="/">
                                진행과정
                            </Link>
                            <Link className="p-1" href="/">
                                보험 임플란트
                            </Link>
                        </div>
                    </div>
                </div>
            ) : null}
        </section>
    );
}
