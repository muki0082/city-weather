import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute }   from '@angular/router';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { CityComponent } from './city.component';
import { CityNameComponent } from './city-name.component';
import { CitiesComponent } from './cities.component';
import { SearchComponent } from "./search.component";

@NgModule({
  declarations: [
    AppComponent, CityComponent, CityNameComponent, CitiesComponent, SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // Defined routes: cities is a list of cities, city is extended forecast for the given city
    RouterModule.forRoot([
       {
        // Going to the app root will redirect to cities component
        path: '',
        redirectTo: '/cities',
        pathMatch: 'full'
      },
      {
        path: 'city/:id',
        component: CityComponent
      },
      {
        path: 'city-name/:name',
        component: CityNameComponent
      },
      {
        path: 'cities',
        component: CitiesComponent
      },
      {
        path: 'search',
        component: SearchComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
