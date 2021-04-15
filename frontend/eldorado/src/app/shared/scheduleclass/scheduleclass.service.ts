import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ScheduleclassService {

  constructor(
    private http: HttpClient
  ) { }

  getClasses() : Observable<any[]>{
    const user = localStorage.getItem('tokenid');
    return this.http.get<any[]>(`${environment.api}/scheduleclass/user/${user}`)
  }

  postClasses(classes: any) : Observable<any[]>{
    return this.http.post<any[]>(`${environment.api}/scheduleclass`, classes)
  }

}
