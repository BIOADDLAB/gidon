export interface PriceRow {
    id: string;
    label: string;
    value: string;
}

export interface PriceTable {
    id: string;
    title: string;
    headerLeft: string;
    headerRight: string;
    rows: PriceRow[];
}

export interface PriceGuideData {
    tables: PriceTable[];
    notices: string[];
}

export const PRICE_GUIDE_COLLECTION = 'priceGuide';

export const DEFAULT_PRICE_GUIDE: PriceGuideData = {
    tables: [
        {
            id: 'implant-fee',
            title: '임플란트 비용안내',
            headerLeft: '구분',
            headerRight: '오스템 임플란트',
            rows: [
                { id: 'implant-price', label: '가격', value: '55만원' },
                { id: 'implant-ct', label: '정밀 진단비 (3D CT 및 모의 시술)', value: '포함' },
                { id: 'implant-abutment', label: '맞춤형 지대주', value: '포함' },
                { id: 'implant-upgrade', label: '보철물 업그레이드', value: '포함' },
                { id: 'implant-warranty', label: '사후 보증제', value: '포함' },
            ],
        },
        {
            id: 'included',
            title: '가격 포함 항목 안내',
            headerLeft: '포함 항목',
            headerRight: '내용',
            rows: [
                { id: 'inc-ct', label: '정밀 진단', value: '3D CT 촬영 및 모의 시술 진행' },
                { id: 'inc-abutment', label: '맞춤형 지대주', value: '개인 구강 구조에 맞춘 지대주 사용' },
                { id: 'inc-upgrade', label: '보철물 업그레이드', value: '자연치아와 유사한 지르코니아 치아 적용' },
                { id: 'inc-warranty', label: '사후 보증제', value: '치료 후 무상 관리 제공' },
            ],
        },
        {
            id: 'insurance',
            title: '건강보험 임플란트 안내',
            headerLeft: '구분',
            headerRight: '내용',
            rows: [
                { id: 'ins-target', label: '적용 대상', value: '만 65세 이상' },
                { id: 'ins-pay', label: '본인 부담금', value: '약 30% 수납' },
                { id: 'ins-cost', label: '예상 비용', value: '약 30만원 대 초중반 예상' },
                { id: 'ins-split', label: '수납', value: '치료 단계별 3회 분할 수납 가능' },
            ],
        },
    ],
    notices: [
        '진단부터 최종 보철까지 안내해드린 가격 외에 추가 비용을 요구하지 않습니다.',
        '맞춤형 지대주와 지르코니아 보철 업그레이드 비용은 별도로 청구하지 않습니다.',
        '뼈이식 등 추가 치료가 필요한 경우에만 별도 비용이 발생할 수 있습니다.',
    ],
};

export function normalizePriceGuide(data: Partial<PriceGuideData> | undefined): PriceGuideData {
    if (!data) {
        return DEFAULT_PRICE_GUIDE;
    }

    const tables = Array.isArray(data.tables)
        ? data.tables.map((table, tableIndex) => ({
              id: table.id || `table-${tableIndex}`,
              title: table.title || '',
              headerLeft: table.headerLeft || '구분',
              headerRight: table.headerRight || '내용',
              rows: Array.isArray(table.rows)
                  ? table.rows.map((row, rowIndex) => ({
                        id: row.id || `row-${tableIndex}-${rowIndex}`,
                        label: row.label || '',
                        value: row.value || '',
                    }))
                  : [],
          }))
        : DEFAULT_PRICE_GUIDE.tables;

    const notices = Array.isArray(data.notices)
        ? data.notices.map((notice) => String(notice ?? ''))
        : DEFAULT_PRICE_GUIDE.notices;

    return { tables, notices };
}
