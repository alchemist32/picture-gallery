import { Observable } from "rxjs";
import { Picture } from "../models/picture.model";
import { Pagination } from "../models/pagination.model";

export abstract class PictureReposiroty {
    abstract getPictures(pagination: Pagination): Observable<Picture[]>;
    abstract getPicture(id: number): Observable<Picture>;
    abstract addPicture(picture: Picture): Observable<Picture>;
    abstract updatePicture(picture: Picture): Observable<Picture>;
    abstract deletePicture(id: number): Observable<Picture>;
}