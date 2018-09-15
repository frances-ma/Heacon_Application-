"use strict";

const medcalendar = {
  template : `
  <nav class="nav">
    <a href="#!/"><i class="material-icons">home</i></a>
    <a href="#!/connections"><i class="material-icons">people_outline</i></a>
    <a href="#!/messages"><i class="material-icons">chat_bubble_outline</i></a>
    <a href="#!/alerts"><i class="material-icons">notifications_none</i></a>
    <a href="#!/resources"><i class="material-icons">local_pharmacy<a href="#!/resources"></i></a>
  </nav>

  <h1>Medication Calendar</h1>

  <section class="med-calendar-container">
    <img src="./graphics/medcalendar.png" class="med-calendar" alt="calendar with medication times and appointments">
  </section>

  <section class="cal-list">
    <h3>September 2018</h3>

    <h4>Friday 15</h4>
    <ul>
      <li>10:30am Ipsum 30mg</li>
      <li>2:30am Lorem 20mg</li>
    </ul>
  </section>
  `
}

angular
.module("app")
.component("medcalendar", medcalendar);
