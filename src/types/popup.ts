export interface PopupData {
    title: string;
    content: string;
    imageUrl: string;
    linkUrl: string;
    enabled: boolean;
    startDate: string;
    endDate: string;
}

export const DEFAULT_POPUP_DATA: PopupData = {
    title: '',
    content: '',
    imageUrl: '',
    linkUrl: '',
    enabled: true,
    startDate: '',
    endDate: '',
};
