import { Observable } from "rxjs";
import { Usecase } from "../base/usecase";
import { Picture } from "../models/picture.model";
import { PictureReposiroty } from "../repository/picture.repository";
import { Pagination } from "../models/pagination.model";

export class GetPicturesUseCase implements Usecase<Pagination, Picture[]> {
    constructor(private repo: PictureReposiroty) {}

    public execute(pagination: Pagination): Observable<Picture[]> {
        return this.repo.getPictures();
    }
}