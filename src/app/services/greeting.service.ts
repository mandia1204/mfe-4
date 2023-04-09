import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class GreetingService {
  private messages: string[] = [];

  constructor() {
    this.messages = ['ola', 'oli', 'bye'];
  }

  greet() {
    return `oli ${this.messages.join(',')}`;
  }
}
