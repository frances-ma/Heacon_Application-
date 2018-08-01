"use strict";

const main = {
  template: `
    <header class="header">
    <img class="logo" src="graphics/hexagon.png">
    <div class="slogan">
        <h2>Heacon</h2>
        <h5>connect and discover<h5>
      </div>
    </header>

  <nav class="nav">

    <a href="#!/"><i class="material-icons">home</i></a>

    <a href="#!/connections"><i class="material-icons">people_outline</i></a>

    <a href="#!/messages"><i class="material-icons">chat_bubble_outline</i></a>

    <a href="#!/alerts"><i class="material-icons">notifications_none</i></a>

    <a href="#!/resources"><i class="material-icons">local_pharmacy<a href="#!/resources"></i></a>

  </nav>

  <h4 class="mission">Connecting Rare Disease Patients and the Organizations that support them.</h4>

  <img class="connected" src="graphics/connected.jpg">

  <p class="more_info">You've come a little before we are ready.  Sign-up today and you'll receive
  early beta access and start connecting in a meaningful way to patients with
  shared experiences.</p>
  `

}

angular
  .module("app")
  .component("main", main)
