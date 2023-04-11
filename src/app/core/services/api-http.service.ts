import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiHttpService {
  constructor(private http: HttpClient) {}

  get<T>(url: string, params?: any): Observable<T> {
    return this.http.get<T>(`${environment.baseUrl}${url}`, { params });
  }

  post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(`${environment.baseUrl}${url}`, { ...body });
  }

  put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(`${environment.baseUrl}${url}`, { ...body });
  }

  delete<T>(url: string, params?: any): Observable<T> {
    return this.http.delete<T>(`${environment.baseUrl}${url}`, { params });
  }
}
