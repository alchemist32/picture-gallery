import { Observable } from "rxjs";
import { Usecase } from "../base/usecase";
import { Picture } from "../models/picture.model";
import { PictureRepository } from "../repository/picture.repository";

export class GetPictureByIdUseCase implements Usecase<string, Picture> {
    constructor(private repo: PictureRepository) {}

    /**
     * execute
     * @param id The id of the picture to be retrieved
     * @description This method retrieves a picture by its id.
     * @returns 
     */
    public execute(id: string): Observable<Picture> {
        return this.repo.getPicture(id);
    }
}
