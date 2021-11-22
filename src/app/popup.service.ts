import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  makeCapitalPopup(data: any): string { 
    return `` +
      `<div><b>Capital:</b> ${ data.name }</div>` +
      `<div><b>State:</b> ${ data.state }</div>` +
      `<div><b>Population:</b> ${ data.population }</div>`
  }

}
