import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  API_URL = 'https://10.216.83.96/sitp-monsakti/backend/newAPI/monLogin';
  TOKEN = 'input-token-disini';
  headers = { Authorization: 'Bearer ' + this.TOKEN };
  constructor(
    private http: HttpClient
  ) { }

  getMainData() {
    return this.http.get(this.API_URL, { headers: this.headers });
  }
}
