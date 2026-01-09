import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Picture } from '../../../../domain/models/picture.model';
import { GetPicturesUseCase } from '../../../../domain/usecases/get-pictures.usecase';
import { AsyncPipe, NgForOf } from '@angular/common';
import { PictureRepository } from '../../../../domain/repository/picture.repository';
import { PictureImplementationRepository } from '../../../../data/picture-implementation.repository';
import { DataModule, pictureRepositoryProvider } from '../../../../data/data.module';
import { PictureComponent } from "../picture/picture.component";



@Component({
  selector: 'gallery-picture-layout',
  standalone: true,
  imports: [NgForOf, AsyncPipe, DataModule, PictureComponent],
  templateUrl: './picture-layout.component.html',
  styleUrl: './picture-layout.component.css'
})
export class PictureLayoutComponent implements OnInit {
  public pictures$: Observable<Picture[]>
  constructor(
    private getPicturesUseCase: GetPicturesUseCase
  ) {
  }

  ngOnInit(): void {
    this.pictures$ = this.getPictures();
  }

  private getPictures(): Observable<Picture[]> {
    return this.getPicturesUseCase.execute({ skip: 1, limit: 12 })
    .pipe(
      tap(pictures => console.log('Pictures loaded:', pictures))
    );
  }
}
