export interface PostType {
    id: number;
    title: string;
    body: string
}

export enum PostStatus {
    list,
    edit,
    add
}