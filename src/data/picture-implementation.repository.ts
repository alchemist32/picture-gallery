import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PictureRepository } from '../domain/repository/picture.repository';
import { Picture } from '../domain/models/picture.model';
import { Pagination } from '../domain/models/pagination.model';
import { PictureRepositoryMapper } from './repository/picture/mappers/picrture-repository.mapper';

import { environment } from '../environment/environment';
import { PictureEntity } from './repository/picture/entitites/picture-entity';


@Injectable({
    providedIn: 'root',
})
/**
 * PictureImplementationRepository
 * @description This class is responsible for making HTTP requests to the API
 * to fetch, create, update, and delete pictures.
 */

export class PictureImplementationRepository extends PictureRepository {
    private readonly apiUrl = `${environment.apiURL}/photos`;
    private readonly pictureRepositoryMapper: PictureRepositoryMapper = new PictureRepositoryMapper();

    constructor(private http: HttpClient) {
        super();
    }

    getPictures(pagination: Pagination): Observable<Picture[]> {
        const params = new HttpParams({
            fromObject: { page: pagination.skip, per_page: pagination.limit }
        });
        return this.http
            .get<PictureEntity[]>(this.apiUrl, { params })
            .pipe(
                map((pictures) => pictures.map((picture) => this.pictureRepositoryMapper.mapFrom(picture))),
            );
    }

    getPicture(id: string): Observable<Picture> {
        return this.http
        .get<PictureEntity>(`${this.apiUrl}/${id}`)
        .pipe(
            map((picture: PictureEntity) => this.pictureRepositoryMapper.mapFrom(picture)),
        );
    }

    addPicture(picture: Picture): Observable<Picture> {
        return this.http.post<PictureEntity>(this.apiUrl, picture)
        .pipe(
            map((picture: PictureEntity) => this.pictureRepositoryMapper.mapFrom(picture)),
        );
    }

}