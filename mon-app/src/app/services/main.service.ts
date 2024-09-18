import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonResponse } from '../models/common-response.interface'
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class MainService {
  API_URL = 'https://10.216.83.96/sitp-monsakti/backend/newAPI';
  TOKEN = 'input-token-disini';
  headers = { Authorization: 'Bearer ' + this.TOKEN };
  constructor(
    private http: HttpClient
  ) { }

  getMainData() {
    return this.http.get<CommonResponse<User[]>>(this.API_URL + '/monLogin', { headers: this.headers });
  }
}
