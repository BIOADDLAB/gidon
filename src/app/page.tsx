import AskSection from '@/components/AskSection';
import MapSection from '../components/MapStion';

export default function Home() {
    return (
        <>
            {/* 폰트 테스트 영역 */}
            <div className="font-sans font-light text-4xl">한글 폰트 테스트 Asta Sans</div>
            <div className="font-sans font-medium text-4xl">한글 폰트 테스트 Asta Sans</div>
            <div className="font-sans font-bold text-4xl">한글 폰트 테스트 Asta Sans</div>
            <div className="font-sans font-black text-4xl">한글 폰트 테스트 Asta Sans</div>
            <div className="font-ui font-light text-4xl">한글 폰트 테스트 SUIT</div>
            <div className="font-ui font-medium text-4xl">한글 폰트 테스트 SUIT</div>
            <div className="font-ui font-bold text-4xl">한글 폰트 테스트 SUIT</div>
            <div className="font-ui font-black text-4xl">한글 폰트 테스트 SUIT</div>
            <div className="font-accent font-light text-4xl">CLINIC</div>

            {/* 상담 및 문의 영역 */}
            <AskSection />

            {/* 오시는 길 */}
            <MapSection />
        </>
    );
}
