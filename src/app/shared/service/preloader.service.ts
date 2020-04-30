import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PreloaderService {
  // tslint:disable-next-line:variable-name
  private static _loaders: Array<Promise<any>> = [];

  public static registerLoader(method: Promise<any>): void {
    PreloaderService._loaders.push(method);
  }

  public static clear(): void {
    PreloaderService._loaders = [];
  }

  public static load(): Promise<any> {
    return new Promise((resolve, reject) => {
      PreloaderService._executeAll(resolve);
    });
  }

  private static _executeAll(done: any): void {
    setTimeout(() => {
      Promise.all(PreloaderService._loaders)
        .then((values) => {
          done.call(null, values);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }
}
