import { Component, OnInit } from '@angular/core';
import {Course} from "../models/course";
import {CoursesService} from "../services/courses.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  dataSource: Observable<Course[]>;
  displayedColumns: string[] = ['position', 'name' ,'category']

  constructor(private service: CoursesService) {
    this.dataSource = this.service.findAll()
  }

  ngOnInit(): void {
  }

}
