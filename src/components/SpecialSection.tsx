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
                <div className="pt-[100px] pb-[130px] w-full h-full">
                    <div className="relative z-10">
                        <SectionHeading topTitle={topTitle} centerTitle={centerTitle} />

                        <div className="flex flex-wrap justify-center items-center gap-[20px] max-w-[690px] mx-auto mt-[58px]">
                            {cardList.map((card, i) => (
                                <div
                                    key={i}
                                    className="w-[calc(50%-10px)] border border-[#B0B0B0] rounded-[10px] pt-[60px] pb-[50px] flex flex-col items-center justify-center bg-white shadow-sm"
                                >
                                    <img src={card.specialSrc} className="w-18" alt={card.specialAlt} />
                                    <h4 className="whitespace-pre-wrap text-center text-[25px] font-bold pt-3.5 pb-6.25 leading-tight">
                                        {card.cardTitle}
                                    </h4>
                                    <p className="whitespace-pre-wrap text-center text-[18px] text-[#666] leading-relaxed">
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
