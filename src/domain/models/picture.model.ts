import { URLEntity } from "../../data/repository/picture/entitites/picture-entity";
import { Author } from "./author.model";

export interface Picture {
    id: number;
    title: string;
    urls: URLEntity;
    altText: string
    author?: Author
}