'use client';
import Image from 'next/image';

interface HeroProps {
    mainTitle: string;
    subTitle: string;
    imgSrc: string;
}

export default function HeroSection({ mainTitle, subTitle, imgSrc }: HeroProps) {
    return (
        <section className="flex flex-col justify-center items-center relative h-[900px]">
            <Image src={imgSrc} alt="배경 이미지" fill sizes="100vw" className="object-cover object-center -z-10" />
            <h3 className="font-accent text-[20px] mb-1.25 text-white">{subTitle}</h3>
            <h2 className="text-[40px] text-white">{mainTitle}</h2>
        </section>
    );
}
