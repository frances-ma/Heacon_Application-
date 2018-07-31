"use strict";

const main = {
  template: `
  <nav class="nav">

    <a href="#!/resources"><i class="material-icons">home</i></a>

    <a href="#!/resources"><i class="material-icons">people_outline</i></a>

    <a href="#!/resources"><i class="material-icons">chat_bubble_outline</i></a>

    <a href="#!/resources"><i class="material-icons">notifications_none</i></a>

    <a href="#!/resources"><i class="material-icons">local_pharmacy<a href="#!/resources"></i></a>

  </nav>

  <h4>Connecting Rare Disease Patients and the Organizations that support them.</h4>

  <p>You've come a little before we are ready.  Sign-up today and you'll receive
  early beta access and start connecting in a meaningful way to patients with
  shared experiences.</p>
  `

}

angular
  .module("app")
  .component("main", main)
