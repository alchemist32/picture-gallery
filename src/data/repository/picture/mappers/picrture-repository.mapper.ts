import { Mapper } from '../../../../base/mapper';
import { Picture } from '../../../../domain/models/picture.model';
import { PictureEntity } from '../entitites/picture-entity';


export class PictureRepositoryMapper extends Mapper<PictureEntity, Picture> {
    /**
     * mapFrom
     */
    public mapFrom(param: PictureEntity): Picture {
        return {
            id: param.id,
            altText: param.alt_description,
            title: param.title,
            author: param.user,
            urls: param.urls,
        };
    }

    /**
     * mapTo
     */
    public mapTo(param: Picture): PictureEntity {
        return {
            id: param.id,
            alt_description: param.altText,
            title: param.title,
            user: param.author,
            urls: param.urls,
        }
    }
}