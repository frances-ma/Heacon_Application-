"use strict";
const messages = {
  template: `


<nav class="nav">

  <a href="#!/"><i class="material-icons">home</i></a>

  <a href="#!/connections"><i class="material-icons">people_outline</i></a>

  <a href="#!/messages"><i class="material-icons">chat_bubble_outline</i></a>

  <a href="#!/alerts"><i class="material-icons">notifications_none</i></a>

  <a href="#!/resources"><i class="material-icons">local_pharmacy<a href="#!/resources"></i></a>

</nav>

  <h1>Discussion Boards</h1>
<div class="board_container">
  <section class="board_1">
    <a href="" class="lupus box_style">Lupus</a>
    <a href="" class="progeria box_style">Progeria</a>
  </section>

  <section class="board_2">
    <a href="" class="ms box_style">Multiple Sclerosis</a>
    <a href="" class="heart box_style">Heart Failure</a>
  </section>

  <section class="board_3">
    <a href="" class="duchene box_style"> Duchene's </a>
    <a href="" class="sarco box_style"> Sarcoidosis </a>
  </section>
</div>
  `
}
angular
.module("app")
.component("messages", messages);
