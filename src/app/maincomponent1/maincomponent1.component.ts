import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpEventType, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";
import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
interface Course {
  description: string;
  courseListIcon:string;
  iconUrl:string;
  longDescription:string;
  url:string;
}

@Component({
  selector: 'app-maincomponent1',
  templateUrl: './maincomponent1.component.html',
  styleUrls: ['./maincomponent1.component.css']
})
export class Maincomponent1Component implements OnInit {
  courses$: Observable<Course[]>;
  
      constructor(private http: HttpClient) {
  
      }
  
      ngOnInit() {
  
        
         
  
        
  
      }
  get(){
    this.courses$ = this.http
    .get<Course[]>("https://angular-http-guide.firebaseio.com/courses.json")
    .do(console.log)
    .map(data => _.values(data));
  }
      Put() {
  
          const headers = new HttpHeaders().set("Content-Type", "application/json");
  
          this.http.put("https://angular-http-guide.firebaseio.com/courses/-KgVwECOnlc-LHb_B0cQ.json",
              {
                  "courseListIcon": "https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png",
                  "description": "Angular Tutorial For Beginners TEST",
                  "iconUrl": "https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners.jpg",
                  "longDescription": "...",
                  "url": "new-value-for-url"
              },
              {headers})
              .subscribe(
                  (val) => {
  
                      console.log("PUT call successful value returned in body", val);
  
                  },
                  response => {
  
                      console.log("PUT call in error", response);
  
                  },
                  () => {
  
                      console.log("The PUT observable is now completed.");
                  }
              );
  
      }
  
     
  
      Delete() {
  
          this.http.delete("https://angular-http-guide.firebaseio.com/courses/-KgVwECOnlc-LHb_B0cQ.json")
              .subscribe(
                  (val) => {
                      console.log("DELETE call successful value returned in body", val);
                  },
                  response => {
                      console.log("DELETE call in error", response);
                  },
                  () => {
                      console.log("The DELETE observable is now completed.");
                  });
  
      }
  
      Post() {
  
  
          this.http.post("https://angular-http-guide.firebaseio.com/courses/-KgVwECOnlc-LHb_B0cQ.json",
              {
                  "courseListIcon": "...",
                  "description": "TEST",
                  "iconUrl": "..",
                  "longDescription": "...",
                  "url": "new-url"
              })
              .subscribe(
                  (val) => {
                      console.log("POST call successful value returned in body", val);
                  },
                  response => {
                      console.log("POST call in error", response);
                  },
                  () => {
                      console.log("The POST observable is now completed.");
                  });
  
      }
  
  
  
  
  
     
  
     
  
  
  }
