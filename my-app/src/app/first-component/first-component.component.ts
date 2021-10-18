import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';

// selctor ---> html component (eg: index.html)
// className ---> ts files
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

//FirstComponentComponent(){}//java

  constructor(myservice:FirstService) {

    this.course = myservice.serviceData;

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

  getServiceData(){
    //this.course = serviceData.serviceData;
  }

}
