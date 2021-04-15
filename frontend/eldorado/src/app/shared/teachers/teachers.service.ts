import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(
    private http: HttpClient
  ) { }


  getTeachers() : Observable<any[]>{
    return this.http.get<any[]>(`${environment.api}/teachers`)
  }


}
