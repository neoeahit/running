import { Component } from '@angular/core';
@Component({
  template: `
    <div class="parallax">
      <div id="group1" class="parallax__group">
          <div class="parallax__layer parallax__layer--base">
              <div class="title">Base Layer</div>
          </div>
      </div>
      <div id="group2" class="parallax__group">
          <div class="parallax__layer parallax__layer--base">
              <div class="title"></div>
          </div>
          <div class="parallax__layer parallax__layer--back">
              <div class="title introduction">
                  A hub to see races, to find reviews and rate your experience!
              </div>
          </div>
      </div>
      <div id="group3" class="parallax__group">
          <div class="parallax__layer parallax__layer--fore">
              <div class="title">Introducing Stades!</div>
          </div>
          <div class="parallax__layer parallax__layer--base">
              <div class="title"></div>
          </div>
      </div>
      <div id="group4" class="parallax__group">
          <div class="parallax__layer parallax__layer--base">
              <div class="title">Base Layer</div>
          </div>
          <div class="parallax__layer parallax__layer--back">
              <div class="title">Background Layer</div>
          </div>
          <div class="parallax__layer parallax__layer--deep">
              <div class="title">Deep Background Layer</div>
          </div>
      </div>
      <div id="group7" class="parallax__group">
          <div class="parallax__layer parallax__layer--base">
              <section class="social">
                  <h1>Follow Us !</h1>
                  <a href="https://www.facebook.com/pages/Team-Les-Chameaux/323593047764030?fref=ts" target="_blank">Facebook
                  </a>
                  <a href="https://twitter.com/neoeahit" target="_blank">Twitter </a>
                  <a href="https://www.youtube.com/channel/UCXAp1yNfxmw9JE9GJoPzJ8w" target="_blank">Youtube</a>
              </section>
              <section class="credits">
                  Destination Running © copyright 2015 | <a href="/About Us">About Us</a>
              </section>
              <span class="arrow"></span></div>
      </div>
    </div>
    `
})
export class HomeComponent { }
