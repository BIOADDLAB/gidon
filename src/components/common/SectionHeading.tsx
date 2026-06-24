interface SectionHeadingProps {
    topTitle: string;
    centerTitle: string;
    desc: string;
}

export default function SectionHeading({ topTitle, centerTitle, desc }: SectionHeadingProps) {
    return (
        <div className="text-center">
            {/* 작은 상단 카테고리/텍스트 */}
            <p className={`font-accent text-[#213225] mb-2`}>{topTitle}</p>

            {/* 섹션의 메인 큰 제목 (SEO 핵심) */}
            <h2 className="text-[40px] font-bold text-[#213225] mb-[24px]">{centerTitle}</h2>

            {/* 하단 설명글 */}
            <h3 className="text-[20px] text-[#19251e] font-normal">{desc}</h3>
        </div>
    );
}
