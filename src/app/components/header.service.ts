import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
 })
export class HeaderService {
  private messages: string[] = [];

  constructor() {
    this.messages = ['ola', 'oli', 'bye'];
  }

  getTitle() {
    return this.messages.join(',');
  }
}
