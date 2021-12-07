import { Component, OnInit } from '@angular/core';
import {Course} from "../models/course";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  dataSource: Course[] = [{ id: 1 ,name:'teste',category:'teste'}];
  displayedColumns: string[] = ['position', 'name' ,'category']

  constructor() { }

  ngOnInit(): void {
  }

}
