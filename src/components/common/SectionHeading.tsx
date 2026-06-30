import { ReactNode } from 'react';

interface SectionHeadingProps {
    topTitle: string;
    centerTitle: string;
    desc?: ReactNode;
    isDesc?: boolean;
    isWhite?: boolean;
    isLh?: boolean;
}

/* ============================================================
   #줄바꿈반응형 가이드 (사이즈별로 줄바꿈 다르게 하는 법)
   ============================================================
   원리: <br/> 자체에 반응형 클래스를 줘서 보이거나 숨길 수 있음.
   - hidden: 기본(모바일)에서 숨김 = 줄바꿈 안 함
   - md:block: md 이상에서만 보임 = md부터 줄바꿈 적용

   예시 1) 모바일에서는 한 줄, PC에서는 두 줄로 끊고 싶을 때
   <h2>
       앞부분 텍스트
       <br className="hidden md:block" />  // md 이상에서만 줄바꿈
       뒷부분 텍스트
   </h2>

   예시 2) 모바일에서는 두 줄, PC에서는 한 줄로 합치고 싶을 때
   <h2>
       앞부분 텍스트
       <br className="block md:hidden" />  // 모바일에서만 줄바꿈
       뒷부분 텍스트
   </h2>

   예시 3) 사이즈마다 전부 다르게 끊고 싶을 때 (3단 분기)
   <p>
       문장A
       <br className="hidden sm:block lg:hidden" />   // sm~lg 사이에서만 줄바꿈
       문장B
       <br className="hidden lg:block" />              // lg 이상에서만 줄바꿈
       문장C
   </p>

   참고: 문장 자체를 줄바꿈 없이 자연스럽게 흐르게 하고 싶다면
   <br/> 없이 break-keep만 주는 게 제일 깔끔함 (어절 단위로만 끊김).
   디자인상 의도적으로 특정 지점에서 끊어야 할 때만 위 패턴 사용.
   ============================================================ */

export default function SectionHeading({ topTitle, centerTitle, desc, isDesc, isWhite, isLh }: SectionHeadingProps) {
    // #STYLE: isLh가 true일 때 모바일에서 줄바꿈 시 글자가 수직으로 겹치는 버그를 막기 위해 leading-normal 적용, PC 규격 진입 시 md:leading-none으로 원본 핏 전환
    return (
        <div className="text-center px-4">
            <p className={`font-accent ${isWhite ? 'text-[#fff]' : 'text-[#213225]'}`}>{topTitle}</p>

            <h2
                className={`text-[28px] md:text-[34px] lg:text-[40px] 2xl:text-[46px] font-bold ${isWhite ? 'text-[#fff]' : 'text-[#213225]'} mt-1 break-keep`}
            >
                {centerTitle}
            </h2>

            {isDesc ? (
                <h3
                    className={`text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] text-[#19251e] whitespace-pre-wrap mt-5 md:mt-6 font-normal break-keep leading-relaxed ${isLh ? 'leading-normal md:leading-none' : ''}`}
                >
                    {desc}
                </h3>
            ) : null}
        </div>
    );
}
