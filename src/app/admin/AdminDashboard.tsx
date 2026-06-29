'use client';

import { useState } from 'react';

type AdminTab = 'popup' | 'inflow';

const inflowRows = [
    { source: '네이버 검색', medium: 'organic', campaign: '브랜드 검색', visits: 128, inquiries: 12 },
    { source: '인스타그램', medium: 'social', campaign: '임플란트 이벤트', visits: 86, inquiries: 7 },
    { source: '직접 유입', medium: 'direct', campaign: '-', visits: 64, inquiries: 5 },
];

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState<AdminTab>('popup');
    const [popupEnabled, setPopupEnabled] = useState(true);

    return (
        <div className="mx-auto flex w-full max-w-7xl gap-6 px-6 py-10">
            <aside className="w-[240px] shrink-0 rounded-3xl border border-line bg-white p-4 shadow-sm">
                <div className="mb-6 px-3">
                    <p className="text-sm font-semibold text-green-600">GIDEON ADMIN</p>
                    <h1 className="mt-1 text-2xl font-bold text-ink-900">관리자</h1>
                </div>

                <nav className="flex flex-col gap-2">
                    <button
                        type="button"
                        className={`rounded-2xl px-4 py-3 text-left text-sm font-bold transition-colors ${
                            activeTab === 'popup'
                                ? 'bg-green-600 text-white'
                                : 'text-ink-500 hover:bg-paper hover:text-green-600'
                        }`}
                        onClick={() => setActiveTab('popup')}
                    >
                        팝업 관리
                    </button>
                    <button
                        type="button"
                        className={`rounded-2xl px-4 py-3 text-left text-sm font-bold transition-colors ${
                            activeTab === 'inflow'
                                ? 'bg-green-600 text-white'
                                : 'text-ink-500 hover:bg-paper hover:text-green-600'
                        }`}
                        onClick={() => setActiveTab('inflow')}
                    >
                        유입 관리
                    </button>
                </nav>
            </aside>

            <section className="min-w-0 flex-1">
                {activeTab === 'popup' ? (
                    <PopupManagement popupEnabled={popupEnabled} setPopupEnabled={setPopupEnabled} />
                ) : (
                    <InflowManagement />
                )}
            </section>
        </div>
    );
}

function PopupManagement({
    popupEnabled,
    setPopupEnabled,
}: {
    popupEnabled: boolean;
    setPopupEnabled: (value: boolean) => void;
}) {
    return (
        <div className="rounded-3xl border border-line bg-white p-8 shadow-sm">
            <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                    <p className="text-sm font-semibold text-green-600">Popup</p>
                    <h2 className="mt-1 text-3xl font-bold text-ink-900">팝업 관리</h2>
                    <p className="mt-2 text-sm text-ink-500">
                        사이트 첫 진입 시 노출할 팝업 내용을 관리하는 영역입니다.
                    </p>
                </div>
                <label className="flex cursor-pointer items-center gap-3 rounded-full bg-paper px-4 py-2 text-sm font-bold text-ink-900">
                    <input
                        type="checkbox"
                        className="h-4 w-4 accent-green-600"
                        checked={popupEnabled}
                        onChange={(event) => setPopupEnabled(event.target.checked)}
                    />
                    팝업 사용
                </label>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
                <form className="grid gap-5">
                    <label className="grid gap-2 text-sm font-bold text-ink-900">
                        팝업 제목
                        <input
                            type="text"
                            placeholder="예: 6월 임플란트 상담 이벤트"
                            className="rounded-2xl border border-line px-4 py-3 text-sm font-medium outline-none transition-colors focus:border-green-600"
                        />
                    </label>

                    <label className="grid gap-2 text-sm font-bold text-ink-900">
                        팝업 내용
                        <textarea
                            rows={5}
                            placeholder="방문자에게 보여줄 안내 문구를 입력하세요."
                            className="resize-none rounded-2xl border border-line px-4 py-3 text-sm font-medium outline-none transition-colors focus:border-green-600"
                        />
                    </label>

                    <div className="grid gap-5 md:grid-cols-2">
                        <label className="grid gap-2 text-sm font-bold text-ink-900">
                            이미지 URL
                            <input
                                type="text"
                                placeholder="/images/popup/main.jpg"
                                className="rounded-2xl border border-line px-4 py-3 text-sm font-medium outline-none transition-colors focus:border-green-600"
                            />
                        </label>
                        <label className="grid gap-2 text-sm font-bold text-ink-900">
                            연결 링크
                            <input
                                type="text"
                                placeholder="/price"
                                className="rounded-2xl border border-line px-4 py-3 text-sm font-medium outline-none transition-colors focus:border-green-600"
                            />
                        </label>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                        <label className="grid gap-2 text-sm font-bold text-ink-900">
                            시작일
                            <input
                                type="date"
                                className="rounded-2xl border border-line px-4 py-3 text-sm font-medium outline-none transition-colors focus:border-green-600"
                            />
                        </label>
                        <label className="grid gap-2 text-sm font-bold text-ink-900">
                            종료일
                            <input
                                type="date"
                                className="rounded-2xl border border-line px-4 py-3 text-sm font-medium outline-none transition-colors focus:border-green-600"
                            />
                        </label>
                    </div>

                    <button
                        type="button"
                        className="mt-2 w-fit rounded-full bg-green-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-green-900"
                    >
                        저장 준비
                    </button>
                </form>

                <div className="rounded-3xl bg-paper p-5">
                    <p className="mb-4 text-sm font-bold text-green-600">미리보기</p>
                    <div className="rounded-3xl bg-white p-5 shadow-sm">
                        <div className="mb-4 flex items-center justify-between">
                            <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-bold text-white">
                                {popupEnabled ? '노출 중' : '숨김'}
                            </span>
                            <span className="text-lg font-bold text-ink-500">×</span>
                        </div>
                        <div className="mb-4 flex h-32 items-center justify-center rounded-2xl bg-[#E8E1D3] text-sm font-bold text-ink-500">
                            Popup Image
                        </div>
                        <h3 className="text-xl font-bold text-ink-900">팝업 제목 영역</h3>
                        <p className="mt-2 text-sm leading-6 text-ink-500">
                            등록한 내용이 실제 팝업에서 보이는 형태를 확인하는 영역입니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function InflowManagement() {
    return (
        <div className="rounded-3xl border border-line bg-white p-8 shadow-sm">
            <div className="mb-8">
                <p className="text-sm font-semibold text-green-600">Inflow</p>
                <h2 className="mt-1 text-3xl font-bold text-ink-900">유입 관리</h2>
                <p className="mt-2 text-sm text-ink-500">
                    광고, 검색, SNS 등 방문 경로를 확인할 수 있도록 준비한 관리 화면입니다.
                </p>
            </div>

            <div className="mb-8 grid gap-4 md:grid-cols-3">
                <StatCard label="오늘 방문" value="278" />
                <StatCard label="상담 전환" value="24" />
                <StatCard label="전환율" value="8.6%" />
            </div>

            <div className="overflow-hidden rounded-3xl border border-line">
                <table className="w-full border-collapse bg-white text-left text-sm">
                    <thead className="bg-paper text-xs uppercase tracking-wide text-ink-500">
                        <tr>
                            <th className="px-5 py-4 font-bold">유입 경로</th>
                            <th className="px-5 py-4 font-bold">매체</th>
                            <th className="px-5 py-4 font-bold">캠페인</th>
                            <th className="px-5 py-4 font-bold">방문</th>
                            <th className="px-5 py-4 font-bold">문의</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inflowRows.map((row) => (
                            <tr key={`${row.source}-${row.campaign}`} className="border-t border-line">
                                <td className="px-5 py-4 font-bold text-ink-900">{row.source}</td>
                                <td className="px-5 py-4 text-ink-500">{row.medium}</td>
                                <td className="px-5 py-4 text-ink-500">{row.campaign}</td>
                                <td className="px-5 py-4 font-bold text-ink-900">{row.visits}</td>
                                <td className="px-5 py-4 font-bold text-green-600">{row.inquiries}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function StatCard({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-3xl bg-paper p-5">
            <p className="text-sm font-bold text-ink-500">{label}</p>
            <strong className="mt-2 block text-3xl font-bold text-ink-900">{value}</strong>
        </div>
    );
}
