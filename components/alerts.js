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

    <h1 class="alert_text">Health Alerts</h1>
     <div class="alert_box">
       <div class="lupus_board">Lupus Board Updates</div>
     </div>
     
  `

}
angular
.module("app")
.component("alerts", alerts);

/* <div class="mom">
  <a href="https://www.kaleidoscopefightinglupus.org/coping-with-lupus-how-does-lupus-affect-your-state-of-mind-and-body/">
  <img class="coping" src="graphics/coping.jpg"/>
  </a>
</div> */