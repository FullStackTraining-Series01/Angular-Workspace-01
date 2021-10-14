import { Component, OnInit } from '@angular/core';
import { Course } from '../first.interface';
import { FirstService } from '../first.service';

// selector  ---> html component (eg: index.html)
// className  ---> ts files 

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  
  //FirstComponentComponent(){}//java

  constructor( private myservice:FirstService) { 

    //this.course = myservice.serviceData;
    //this.getCourses();

  }

  ngOnInit(): void {
  }

  course ?: String = "full stack developer"; 

  updateCourse(course ?: string): String{ //null, undefined
      this.course = course;

      return "ABC";
  }

  getABC(){
    this.course = this.updateCourse();
  }

  getCourses(){
    this.myservice.getCourses().subscribe(data =>{
      console.log("data" + JSON.stringify(data));
      this.course = data.name;
    });
  }


}
