import { AuthorEntity } from './author-entity';

export interface PictureEntity {
    id: number;
    title: string;
    urls: URLEntity;
    alt_description: string
    user?: AuthorEntity
}

export interface URLEntity {
    full: string; 
    raw: string; 
    regular: string; 
    small: string; 
    small_s3: string; 
    thumb: string;
}