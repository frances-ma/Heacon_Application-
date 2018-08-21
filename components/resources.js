"use strict";

const resources = {
    template: `

    <nav class="nav">
      <a href="#!/"><i class="material-icons">home</i></a>
      <a href="#!/connections"><i class="material-icons">people_outline</i></a>
      <a href="#!/messages"><i class="material-icons">chat_bubble_outline</i></a>
      <a href="#!/alerts"><i class="material-icons">notifications_none</i></a>
      <a href="#!/resources"><i class="material-icons">local_pharmacy<a href="#!/resources"></i></a>
    </nav>

    <h1>Resources</h1>
        <section class="reslist">
            <a href="#!/medlist">Medication List</a>
            <a href="#!/docnotes">Doctor's Notes</a>
            <a href="#!/medcalendar">Medication Calendar</a>
            <a href="#!/docfolder">Med Document Holder</a>
            <a href="#!/specialists">Specialists Near You</a>
        </section>
    `
}

angular
.module("app")
.component("resources", resources);
