import AskSection from '@/components/AskSection';
import MapSection from '../components/MapStion';
import CareSection from '../components/CareSection';
import RecommendSection from '../components/RecommendSection';
import FaqSection from '../components/FaqSection';
import ProcessSection from '../components/ProcessSection';

interface implantdDtaProps {
    stepNumber: number;
    title: string;
    description: string;
    imgSrc: string;
    imgAlt: string;
}

export default function Home() {
    const implantData: implantdDtaProps[] = [
        {
            stepNumber: 1,
            title: 'AI 구강스캔을 통해 정밀한 진단 진행',
            description:
                '3D CT 촬영과 구강 검진을 통해 치아와 잇몸 상태를 분석하고, 가상 모의 수술로 식립 위치를 계획합니다.',
            imgSrc: '/images/bg_procecss_test.jpg',
            imgAlt: 'AI 구강스캔 진단 이미지',
        },
        {
            stepNumber: 2,
            title: '네비게이션 임플란트 식립',
            description: '사전에 계획된 치료 위치 가이드를 바탕으로 보다 정교하게 임플란트를 식립합니다.',
            imgSrc: '/images/bg_procecss_test.jpg',
            imgAlt: '임플란트 식립 예시 이미지',
        },
        {
            stepNumber: 3,
            title: '보철 완성 & 사후 관리',
            description:
                '임플란트가 잇몸뼈와 안정적으로 결합된 후 맞춤 보철물을 장착하고, 정기 검진을 통해 관리합니다.',
            imgSrc: '/images/bg_procecss_test.jpg',
            imgAlt: '사후 관리 진료 이미지',
        },
    ];
    return (
        <>
            {/* 상담 및 문의 영역 */}
            <AskSection />

            {/* 오시는 길 */}
            <MapSection />

            {/* 주의사항 */}
            <CareSection />

            {/* 추천 영역 */}
            <RecommendSection />

            {/* 자주묻는질문 */}
            <FaqSection />

            {/* 진행과정 */}
            <ProcessSection topTitle="PROCESS" centerTitle="임플란트 진행과정" stepData={implantData} />
        </>
    );
}
