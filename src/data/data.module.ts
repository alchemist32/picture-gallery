import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi  } from '@angular/common/http';

import { PictureRepository } from './../domain/repository/picture.repository';
import { PictureImplementationRepository } from './picture-implementation.repository';
import { GetPicturesUseCase } from '../domain/usecases/get-pictures.usecase';
import { GetPictureByIdUseCase } from '../domain/usecases/get-picture-by-id.usecase';
import { authInterceptor } from '../infrastructure/http/interceptors/auth.interceptor';

const getPicturesUseCaseFactory = (pictureRepo: PictureRepository) => {
  return new GetPicturesUseCase(pictureRepo);
};
const getPictureByIdUseCaseFactory = (pictureRepo: PictureRepository) => {
  return new GetPictureByIdUseCase(pictureRepo);
};

export const pictureRepositoryProvider = {
  provide: GetPicturesUseCase,
  deps: [PictureRepository],
  useFactory: getPicturesUseCaseFactory,
};

export const pictureByIdRepositoryProvider = {
  provide: GetPictureByIdUseCase,
  deps: [PictureRepository],
  useFactory: getPictureByIdUseCaseFactory,
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    pictureRepositoryProvider,
    pictureByIdRepositoryProvider,
    { provide: PictureRepository, useClass: PictureImplementationRepository }
  ],
})
export class DataModule { }
