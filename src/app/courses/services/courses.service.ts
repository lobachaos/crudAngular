import {Injectable} from '@angular/core';
import {Course} from "../models/course";
import {HttpClient} from "@angular/common/http";
import {Observable, take, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API: string = '/assets/courses.json'

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API).pipe(
      take(1),
      tap(courses => console.log(courses))
    );
  }
}
