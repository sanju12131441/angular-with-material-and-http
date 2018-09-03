import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import {FormsModule } from '@angular/forms';
import { MatToolbarModule,MatCheckboxModule,MatIconModule,MatCardModule,MatMenuModule,MatSidenavModule} from '@angular/material';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Routes,RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenudemoComponent } from './menudemo/menudemo.component';
import { Maincomponent1Component } from './maincomponent1/maincomponent1.component';
import { Maincomponent2Component } from './maincomponent2/maincomponent2.component';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import {AuthInterceptor} from "./auth-intercepetor";
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/of';
const routes:Routes=[
  {path:'sidenav1',component:Maincomponent1Component},
  {path:'sidenav2',component:Maincomponent2Component}
  
];
@NgModule({
  declarations: [
    AppComponent,
    MenudemoComponent,
    Maincomponent1Component,
    Maincomponent2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatSidenavModule,
    RouterModule.forRoot(routes),
    HttpClientModule

  ],
  providers: [ [ { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } ]],
  bootstrap: [AppComponent]
})
export class AppModule { }
