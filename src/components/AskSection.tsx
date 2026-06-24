import AskCard from './AskCard';
import AskForm from './AskForm';
import SectionHeading from './common/SectionHeading';

export default function AskSection() {
    return (
        <section className="bg-[radial-gradient(circle_at_0%_100%,rgba(150,168,147,0.55)_0%,transparent_0%),linear-gradient(10deg,#96A893_0%,#E0E7DF_65%,#f8f8f8_100%)] pt-[100px] pb-[130px]">
            <SectionHeading
                topTitle="Contact GIDEON"
                centerTitle="간편 상담"
                desc="상담부터 예약까지, 원하시는 방법으로 간편하게 문의하세요."
            />
            <div className="pt-10 max-w-[1200px] mx-auto px-4">
                {/* 상단 카드 영역 */}
                <AskCard />

                {/* 하단 폼 영역 */}
                <AskForm />
            </div>
        </section>
    );
}
