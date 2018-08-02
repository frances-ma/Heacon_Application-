"use strict";
const alerts = {
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


    <h1>Health Alerts</h1>
     <div>
       <h2>Health Alerts</h2>
     </div>
  `

}
angular
.module("app")
.component("alerts", alerts);
