import SectionHeading from './common/SectionHeading';

interface SpecialSectionProps {
    topTitle: string;
    centerTitle: string;
    cardTitle: string;
    cardDesc: string;
    specialSrc: string;
}

export default function SpecialSection({
    topTitle,
    centerTitle,
    cardTitle,
    cardDesc,
    specialSrc,
}: SpecialSectionProps) {
    return (
        <section>
            <div>
                <SectionHeading topTitle={topTitle} centerTitle={centerTitle} />

                {/* 카드 영역 */}
                <div>
                    <div>
                        <img src={specialSrc} alt="" />
                        <h4>{cardTitle}</h4>
                        <p>{cardDesc}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
