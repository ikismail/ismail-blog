import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  // tslint:disable-next-line:variable-name
  private _selector = 'loader-wrapper';
  // tslint:disable-next-line:variable-name
  private _element: HTMLElement;

  constructor() {
    this._element = document.getElementById(this._selector);
  }

  public show(): void {
    this._element.style.display = 'block';
  }

  public hide(delay: number = 300): void {
    setTimeout(() => {
      this._element.style.display = 'none';
    }, delay);
  }
}
