'use client';

interface PrivacyPolicyModalProps {
    onClose: () => void;
}

export default function PrivacyPolicyModal({ onClose }: PrivacyPolicyModalProps) {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-5 py-8">
            <div className="max-h-[86vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-white text-ink-900 shadow-2xl">
                <div className="flex items-center justify-between border-b border-line px-6 py-5">
                    <h2 className="text-xl font-bold text-green-900">개인정보 취급방침</h2>
                    <button
                        type="button"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-paper text-2xl leading-none text-ink-500"
                        onClick={onClose}
                        aria-label="개인정보 취급방침 닫기"
                    >
                        ×
                    </button>
                </div>

                <div className="max-h-[calc(86vh-80px)] overflow-y-auto px-6 py-6 text-left text-[14px] leading-7 text-ink-900">
                    <p className="mb-5">
                        기드온치과의원은 귀하의 개인정보를 소중하게 취급하며, 『개인정보 보호법』 및
                        『정보통신망 이용촉진 및 정보보호 등에 관한 법률』을 준수하고 있습니다.
                    </p>

                    <section className="mb-5">
                        <h3 className="mb-2 font-bold text-green-900">■ 1. 수집하는 개인정보 항목</h3>
                        <p>
                            의원은 회원가입, 원활한 고객 상담, 각종 서비스 제공을 위해 아래와 같은 개인정보를 수집하고
                            있습니다.
                        </p>
                        <p>- 수집항목: 이름, 휴대전화번호</p>
                        <p>- 수집방법: 홈페이지 문의 양식</p>
                    </section>

                    <section className="mb-5">
                        <h3 className="mb-2 font-bold text-green-900">■ 2. 개인정보의 수집 및 이용목적</h3>
                        <p>수집한 개인정보는 다음의 목적을 위해 활용됩니다.</p>
                        <p>
                            - 회원 관리: 개인 식별, 불량회원의 부정 이용 방지와 비인가 사용 방지, 민원 처리, 고지사항 전달
                        </p>
                        <p>
                            - 서비스 제공: 진료 예약 및 상담 서비스 제공, 시술 정보 안내, 콘텐츠 제공, 맞춤형 의료 서비스 구성
                        </p>
                        <p>- 마케팅 및 광고에 활용: 신규 서비스 및 이벤트 정보 안내 (별도 마케팅 동의 시)</p>
                    </section>

                    <section className="mb-5">
                        <h3 className="mb-2 font-bold text-green-900">■ 3. 개인정보의 보유 및 이용기간</h3>
                        <p>
                            의원은 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계
                            법령의 규정에 의하여 보존할 필요가 있는 경우 아래와 같이 일정 기간 보관합니다.
                        </p>
                        <p>- 보존 항목: 이름, 연락처 등 가입 정보</p>
                        <p>
                            - 보존 근거: 전자상거래 등에서의 소비자보호에 관한 법률 (계약 또는 청약철회 등에 관한 기록:
                            5년)
                        </p>
                        <p>- 기타 의료법 등 관련 법령에서 정한 진료기록부 보존 연한 준수</p>
                    </section>

                    <section className="mb-5">
                        <h3 className="mb-2 font-bold text-green-900">■ 4. 개인정보의 파기절차 및 방법</h3>
                        <p>
                            의원은 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
                        </p>
                        <p>
                            - 파기절차: 이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류함)
                            내부 방침 및 기타 관련 법령에 의한 사유에 따라 일정 기간 저장된 후 파기됩니다. 별도 DB로
                            옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되는 목적 이외의 다른 용도로 이용되지
                            않습니다.
                        </p>
                        <p>
                            - 파기방법: 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제하며,
                            종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통해 파기합니다.
                        </p>
                    </section>

                    <p className="rounded-2xl bg-paper px-4 py-3 font-semibold text-ink-900">
                        ※ 귀하는 개인정보 수집 및 이용에 거부할 권리가 있습니다. 다만, 필수 항목 수집에 거부하실 경우
                        서비스 이용이 제한될 수 있습니다.
                    </p>
                </div>
            </div>
        </div>
    );
}
