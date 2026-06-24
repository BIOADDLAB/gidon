interface SectionHeadingProps {
    topTitle: string;
    centerTitle: string;
    desc: string;
    isDesc?: boolean;
}

export default function SectionHeading({ topTitle, centerTitle, desc, isDesc }: SectionHeadingProps) {
    return (
        <div className="text-center">
            {/* 작은 상단 카테고리/텍스트 */}
            <p className="font-accent text-[#213225]">{topTitle}</p>

            {/* 섹션의 메인 큰 제목 (SEO 핵심) */}
            <h2 className="text-[40px] font-bold text-[#213225] mt-8">{centerTitle}</h2>

            {/* 하단 설명글 */}
            {isDesc ? <h3 className="text-[20px] text-[#19251e] mt-[24px] font-normal">{desc}</h3> : null}
        </div>
    );
}
