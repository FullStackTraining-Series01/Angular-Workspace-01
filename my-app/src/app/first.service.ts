import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Course } from './first.interface';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  url:string = 'http://localhost:8080/courses';

  constructor(private http: HttpClient) { }


  getCourses(): Observable<Course> {
    return this.http.get<Course>(this.url);
  }

}
