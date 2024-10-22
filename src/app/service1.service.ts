import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Service1Service {
  constructor() {}

  getMessage(): string {
    return 'Hello from service';
  }
}
