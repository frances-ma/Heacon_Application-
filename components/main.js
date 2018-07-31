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
  `

}

angular
  .module("app")
  .component("main", main)
