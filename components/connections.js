"use strict";

const connections = {
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

    <section class="friendbuttons">
      <section class="friendlist btn">
        <a href="">300 Connections</a>
      </section>
      <section class="addcontact btn">
        <a href="">Add Contact<i class="material-icons">add_circle_outline</i></a>
      </section>
    </section>

      <section class="invitations">
        <h3 class="invite-header">Invitations</h3>
          <div>
            <img src="">
            <h3>Name Goes Here</h3>
          </div>

      </section>

      <section class="recentadds">
      
      </section>
  `
}

angular
.module("app")
.component("connections", connections);
