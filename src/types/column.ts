export interface ColumnData {
    title: string;
    category: string;
    summary: string;
    thumbnailUrl: string;
    contentHtml: string;
    published: boolean;
}

export const DEFAULT_COLUMN_DATA: ColumnData = {
    title: '',
    category: '',
    summary: '',
    thumbnailUrl: '',
    contentHtml: '',
    published: false,
};
