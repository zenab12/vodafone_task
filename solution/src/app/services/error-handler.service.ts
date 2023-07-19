import { Injectable } from '@angular/core';
import { ErrorHandler } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  constructor() { }

  handleError(error: any): void {
    const date = new Date();
    console.error('Error: ', {
      timeStamp:date.toISOString(),
      message: error.message,
      zone: error.zone,
    });
  }


}
