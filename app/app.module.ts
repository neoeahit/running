import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BlogComponent }  from './blog/blog.component';
import { HomeComponent }    from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    BlogComponent,
    HomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
