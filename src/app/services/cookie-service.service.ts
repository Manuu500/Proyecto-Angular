import { Injectable } from '@angular/core';
import { CookieService } from "ngx-cookie-service";


@Injectable({
  providedIn: 'root',
})
export class CookieServiceService {
  constructor(private cookieService: CookieService) {}

  setCookie(name: string, content: string, time: number = 400000) {
    this.cookieService.set(name, content, time);
  }

  getCookie(name: string) {
    return this.cookieService.get(name);
  }

  deleteCookie(name: string) {
    this.cookieService.delete(name);
  }

  deleteAll() {
    this.cookieService.deleteAll();
  }
}

export { CookieService };
