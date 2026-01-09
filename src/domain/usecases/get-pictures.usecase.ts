import { Observable } from "rxjs";
import { Usecase } from "../base/usecase";
import { Picture } from "../models/picture.model";
import { PictureRepository } from "../repository/picture.repository";
import { Pagination } from "../models/pagination.model";

export class GetPicturesUseCase implements Usecase<Pagination, Picture[]> {
    constructor(private repo: PictureRepository) {}

    /**
     * execute
     * @param pagination The pagination object containing the page number and page size
     * @description This method retrieves a list of pictures based on the pagination object.
     * It returns an observable of an array of Picture objects.
     * @returns 
     */
    public execute(pagination: Pagination): Observable<Picture[]> {
        return this.repo.getPictures(pagination);
    }
}