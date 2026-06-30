// pages/doctors/page.tsx

import HeroSection from '@/components/HeroSection';
import MapSection from './../../components/MapStion';
import SectionHeading from '@/components/common/SectionHeading';
import TourSwiper from '@/components/TourSwiper';

interface DoctorProps {
    id: number;
    name: string;
    position: string;
    intro: string;
    education?: string;
    specialties?: string[];
    history: string[];
    imgSrc: string;
}

export default function DoctorsPage() {
    const doctorsMenuList = ['의료진소개'];

    // #FIX: 이미지 경로 오타 수정 및 데이터 정리
    const doctorList: DoctorProps[] = [
        {
            id: 1,
            name: '성요길',
            position: '대표원장',
            intro: '언제나 환자의 마음을 먼저 생각하며,\n편안한 진료로 보답하겠습니다.',
            history: [
                '전) 신사이사랑치과 대표원장',
                '대한치과의사협회 정회원',
                '대한구강악안면임플란트학회 정회원',
                '한국교정연구회 정회원',
                '국민건강보험공단 인증 구강검진의',
                '장애인 치과 주치의',
                '오스템임플란트 AIC Implant Master Course 수료',
                '한국경제방송 / 생활경제방송 / 메디컬TV 주치의',
                '국내외 의료봉사 다수',
                '남서울은혜교회 시무장로',
            ],
            imgSrc: '/images/doctor_1.jpg',
        },
        {
            id: 2,
            name: '양미라',
            position: '원장',
            intro: '정직하고 세심한 진료로\n환자분들의 미소를 되찾아 드리겠습니다.',
            education: '조선대학교 치과대학 졸업',
            specialties: ['보건복지부 인증 통합치의학과 전문의'],
            history: [
                '보건복지부 인증 통합치의학과 전문의',
                '국민건강보험공단 인증 구강검진의',
                '대한통합치과학회 정회원',
                '대한구강악안면임플란트학회 정회원',
                '전) 서울 웰치과 대표원장',
                '전) 강남레옹치과 원장',
            ],
            imgSrc: '/images/doctor_2.jpg',
        },
        {
            id: 3,
            name: '김현찬',
            position: '원장',
            intro: '철저한 분석과 정밀한 기술로\n가장 안전한 치료를 제공합니다.',
            education: '단국대학교 치과대학 졸업',
            specialties: ['심평원 인증 측두하악관절자극요법 인증의'],
            history: [
                '국민건강보험공단 인증 구강검진의',
                '심평원 인증 측두하악관절자극요법 교육 수료 인증의',
                '대한치과의사협회 정회원',
                '대한구강악안면임플란트학회 정회원',
                '전) 장흥군보건소 치과실 진료과장',
                '전) 바른손치과 / 그랜드치과 원장',
            ],
            imgSrc: '/images/doctor_3.jpg',
        },
        {
            id: 4,
            name: '김의현',
            position: '원장',
            intro: '구강악안면외과 전문의의 전문성으로\n난이도 높은 수술도 편안하게 진행합니다.',
            education: '단국대학교 치과대학 수석 졸업 \n고려대학교 임상치의학대학원 석사 최우수 졸업',
            specialties: ['보건복지부 인증 구강악안면외과 전문의'],
            history: [
                '고려대학교 안암병원 인턴 / 구강악안면외과 전공의',
                '보건복지부 인증 구강악안면외과 전문의',
                '대한악안면성형재건학회 인정의',
                '전) 온아치과 마석점 원장',
            ],
            imgSrc: '/images/doctor_4.jpg',
        },
    ];

    return (
        <main>
            <HeroSection
                mainTitle="의료진소개"
                subTitle="Medical Staff"
                pageName="의료진소개"
                subNavItem="의료진소개"
                imgSrc="/images/bg_interior_3.jpg"
                isNav={true}
                isGreen={true}
                subMenuList={doctorsMenuList}
            />

            <section className="w-full pt-[70px] md:pt-[100px] 2xl:pt-[130px] pb-[90px] md:pb-[130px] 2xl:pb-[160px] flex flex-col items-center bg-[#FAF9F6]">
                <div className="w-full max-w-[1000px] 2xl:max-w-[1180px] px-4">
                    <SectionHeading topTitle="GIDEON'S Dentist" centerTitle="의료진 소개" desc="" isDesc={false} />

                    <div className="mt-[50px] md:mt-[80px] flex flex-col gap-[60px] md:gap-[140px]">
                        {doctorList.map((doc, idx) => {
                            const isEven = idx % 2 === 0;

                            return (
                                <article
                                    key={doc.id}
                                    className={`flex flex-col md:flex-row items-start justify-between gap-[24px] md:gap-[50px] ${
                                        isEven ? '' : 'md:flex-row-reverse'
                                    }`}
                                >
                                    {/* 텍스트 영역 */}
                                    <div className="order-2 md:order-none w-full md:w-[50%] flex flex-col items-start pt-2">
                                        <div className="flex flex-wrap items-center mb-4 md:mb-5">
                                            <h3 className="text-[22px] md:text-[30px] font-extrabold mr-[8px] md:mr-[9px] text-green-600">
                                                {doc.name}
                                            </h3>
                                            <span className="text-[16px] md:text-[22px] text-[#525252] font-medium mr-[10px] md:mr-[13px]">
                                                {doc.position}
                                            </span>
                                            <img
                                                src="/images/common/i_tooth_g.svg"
                                                alt=""
                                                className="h-6 md:h-8 w-auto opacity-30"
                                            />
                                        </div>

                                        {doc.education && (
                                            <p className="text-[13px] md:text-[15px] font-bold text-[#666] mb-5 md:mb-6 whitespace-pre-line break-keep">
                                                {doc.education}
                                            </p>
                                        )}

                                        <p className="text-[15px] md:text-[17px] font-semibold text-[#414141] leading-[1.65] whitespace-pre-line break-keep border-l-[1px] border-green-600 pl-4 mb-6 md:mb-8">
                                            {doc.intro}
                                        </p>

                                        <div className="w-full">
                                            <h4 className="text-[14px] md:text-[16px] font-bold text-[#233a31] flex items-center gap-2 mb-3 md:mb-4">
                                                <img
                                                    src="/images/i_history.svg"
                                                    alt=""
                                                    className="w-[14px] md:w-[16px] h-auto block"
                                                />
                                                약력
                                            </h4>
                                            <ul className="flex flex-col gap-2 text-[13px] md:text-[15px] font-ui font-medium text-[#555555]">
                                                {doc.history.map((h, i) => (
                                                    <li key={i} className="leading-[1.7] md:leading-[1.8] break-keep">
                                                        {' '}
                                                        - {h}{' '}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* #FIX: 이미지 영역 - 고정 높이와 object-cover로 비율 깨짐 방지 */}
                                    <div className="order-1 md:order-none w-full md:w-[44%] shrink-0">
                                        <div className="overflow-hidden rounded-[20px] bg-gray-100 shadow-sm h-[320px] md:h-[520px]">
                                            <img
                                                src={doc.imgSrc}
                                                alt={`기드온치과 ${doc.name} ${doc.position}`}
                                                className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
                                            />
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <TourSwiper />
            <MapSection />
        </main>
    );
}
