"use strict";

const resources = {
    template: `
    <nav class="nav">

      <a href="#!/resources"><i class="material-icons">home</i></a>

      <a href="#!/resources"><i class="material-icons">people_outline</i></a>

      <a href="#!/resources"><i class="material-icons">chat_bubble_outline</i></a>

      <a href="#!/resources"><i class="material-icons">notifications_none</i></a>

      <a href="#!/resources"><i class="material-icons">local_pharmacy<a href="#!/resources"></i></a>

    </nav>

    <h1>Resources</h1>
        <section class="reslist">
            <a href="">Medication List</a>
            <a href="">Doctor's Notes</a>
            <a href="">Medication Calendar</a>
            <a href="">Med Document Holder</a>
            <a href="">Specialists Near You</a>
        </section>
    `
}

angular
.module("app")
.component("resources", resources);
