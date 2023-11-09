import { Injectable } from '@angular/core';
import { iBudget } from '../Ibudget';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/account'

  addUser(user: iBudget): Observable<iBudget> {
    return this.http.post<iBudget>(this.url, user)
  }

  getUser(user: iBudget): Observable<iBudget[]> {
    return this.http.get<iBudget[]>(`${this.url}`)
  }

  updateUser(user: iBudget): Observable<iBudget> {
    return this.http.put<iBudget>(`${this.url}/${user.id}`, user)
  }

  deleteUser(user: iBudget): Observable<iBudget> {
    return this.http.delete<iBudget>(`${this.url}/${user.id}`)
  }
  

}
