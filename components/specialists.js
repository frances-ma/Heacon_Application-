"use strict";

const specialists = {
  template: `
  <nav class="nav">
    <a href="#!/"><i class="material-icons">home</i></a>
    <a href="#!/connections"><i class="material-icons">people_outline</i></a>
    <a href="#!/messages"><i class="material-icons">chat_bubble_outline</i></a>
    <a href="#!/alerts"><i class="material-icons">notifications_none</i></a>
    <a href="#!/resources"><i class="material-icons">local_pharmacy<a href="#!/resources"></i></a>
  </nav>

  <h1 class="specialists-header">Specialists Near You</h1>
    <section class="search-section">
      <input type="text" class="specialist-search" placeholder="search for a facility here...">
      <button class="search-btn"><i class="material-icons">search</i></button>
    </section>

    <section class="map-container">
      <img src="./graphics/mobilemap.png" alt="map of local area" class="map">
    </section>
  `,
}

angular
.module("app")
.component("specialists", specialists);
