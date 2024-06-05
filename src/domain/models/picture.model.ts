import { Author } from "./author.model";

export interface Picture {
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
    altText: string
    author?: Author
}