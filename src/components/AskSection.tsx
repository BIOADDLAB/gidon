import AskCard from './AskCard';
import AskForm from './AskForm';
import SectionHeading from './common/SectionHeading';

export default function AskSection() {
    return (
        // #STYLE: py 대화면 확장
        <section className="bg-[radial-gradient(circle_at_0%_100%,rgba(150,168,147,0.55)_0%,transparent_0%),linear-gradient(10deg,#96A893_0%,#E0E7DF_65%,#f8f8f8_100%)] pt-[70px] md:pt-[100px] 2xl:pt-[130px] pb-[90px] md:pb-[130px] 2xl:pb-[160px]">
            <SectionHeading
                topTitle="Contact GIDEON"
                centerTitle="간편 상담"
                desc="상담부터 예약까지, 원하시는 방법으로 간편하게 문의하세요."
            />
            {/* #STYLE: max-w 대화면 확장 */}
            <div className="pt-8 md:pt-10 max-w-[1200px] 2xl:max-w-[1400px] mx-auto px-4">
                <AskCard />
                <AskForm />
            </div>
        </section>
    );
}
