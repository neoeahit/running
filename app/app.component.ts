import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
   <router-outlet></router-outlet>
    <nav class="navbar navbar-inverse navbar-fixed-bottom" role="navigation">
        <div class="navbar-header">
            <a class="navbar-brand" ui-sref="home">Run-Eat-Travel</a>
        </div>
        <ul class="nav navbar-nav">
            <li><a ui-sref="reviews">Reviews</a></li>
            <li ng-show="currentUser"><a ui-sref="activity">Activity</a></li>
            <li><a ui-sref="about">About</a></li>
        </ul>
    </nav>
  `
})
export class AppComponent {
}
