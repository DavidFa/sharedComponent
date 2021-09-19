export type DataGridColumns = {
    field: string;
    headerName: string;
    width: number;
    align?: string;
    sortable?: boolean;
}

export type DataGridRows = {
    [key: string]: string | number
}