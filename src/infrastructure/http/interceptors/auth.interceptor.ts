import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environment/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const cloneReq = req.clone({
    setHeaders: {
      Authorization: `Client-ID ${environment.accessKey}`
    }
  });
  return next(cloneReq);
};
