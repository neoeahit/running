import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { BlogComponent }  from './blog/blog.component';
import { HomeComponent }    from './home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'blog', component: BlogComponent },
      { path: 'home', component: HomeComponent },
      { path: '', component: HomeComponent },
      { path: '**', component: HomeComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
