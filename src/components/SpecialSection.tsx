import SectionHeading from './common/SectionHeading';
import Image from 'next/image';

interface SpecialCardItem {
    id: number;
    cardTitle: string;
    cardDesc: string;
    specialSrc: string;
    specialAlt: string;
}

interface SpecialSectionProps {
    topTitle: string;
    centerTitle: string;
    cardList: SpecialCardItem[];
}

export default function SpecialSection({ topTitle, centerTitle, cardList }: SpecialSectionProps) {
    return (
        <section className="relative w-full bg-white">
            <div>
                <div className="pt-[70px] md:pt-[100px] 2xl:pt-[130px] pb-[90px] md:pb-[130px] 2xl:pb-[160px] w-full h-full px-4">
                    <div className="relative z-10">
                        <SectionHeading topTitle={topTitle} centerTitle={centerTitle} />

                        <div className="mx-auto mt-[40px] grid max-w-[690px] grid-cols-1 items-stretch gap-[16px] md:mt-[58px] md:gap-[20px] min-[995px]:grid-cols-2 2xl:max-w-[820px]">
                            {cardList.map((card, i) => (
                                <div
                                    key={i}
                                    className="flex h-full min-h-[280px] flex-col items-center rounded-[10px] border border-[#B0B0B0] bg-white px-5 pb-[36px] pt-[44px] shadow-sm md:min-h-[320px] md:px-6 md:pb-[50px] md:pt-[60px]"
                                >
                                    <img src={card.specialSrc} className="h-16 w-16 shrink-0 object-contain md:h-[72px] md:w-[72px]" alt={card.specialAlt} />
                                    <h4 className="mt-3 flex min-h-[3.4em] items-center justify-center text-center text-[20px] font-bold leading-tight break-keep whitespace-pre-wrap md:mt-3.5 md:min-h-[3.6em] md:text-[22px] lg:text-[25px] 2xl:text-[28px]">
                                        {card.cardTitle}
                                    </h4>
                                    <p className="mt-2 flex flex-1 items-center justify-center text-center text-[15px] leading-[1.75] break-keep text-[#666] md:text-[16px] lg:text-[18px]">
                                        {card.cardDesc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
