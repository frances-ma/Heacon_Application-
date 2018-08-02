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

    <h2 class="invite-header">Invitations</h2>

      <section ng-repeat="item in $ctrl.invitations" class="invitations">
            <img src="{{ item.image }}" alt="An image of a blank person">
          <section>
            <h3> {{ item.name }}</h3>
            <p> {{ item.location }}</p>
            <p>  Groups: {{ item.groups }}</p>
          </section>
      </section>

      <section>
        <h3 class="recentheader">Recently Added</h3>

        <section class="recentadds">
              <img src="{{ $ctrl.invitations[0].image }}" alt="An image of a blank person">
            <section>
              <h3> {{ $ctrl.invitations[0].name }}</h3>
              <p> {{ $ctrl.invitations[0].location }}</p>
              <p>  Groups: {{ $ctrl.invitations[0].groups }}</p>
            </section>
        </section>


      </section>
  `,
  controller: function(){
    const vm = this;
    vm.invitations = [
      {
      name: "Lorem Ipsum",
      image: "invitation.png",
      location: "Detroit, MI",
      groups: "Lupus"
    },
    {
      name: "Larry Ipsum",
      image: "invitation.png",
      location: "Royal Oak, MI",
      groups: "Heart Failure"
    },
    {
      name: "Lauren Ipsum",
      image: "invitation.png",
      location: "Highland Park, MI",
      groups: "Duchene's"
    }
   ]

  }
}

angular
.module("app")
.component("connections", connections);
