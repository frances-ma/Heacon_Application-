"use strict";
const messages = {
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

  <h1>Discussion Boards</h1>
  <section class="board_container">
    <a href="">Lupus</a>
    <a href="">Progeria</a>
    <a href="">Multiple Sclerosis</a>
    <a href="">Heart Failure</a>
    <a href=""> Sarcoidosis </a>
    <a href=""> Duchene's </a>
  </section>
  `
}
angular
.module("app")
.component("messages", messages);
