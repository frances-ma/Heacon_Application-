"use strict";

const docnotes = {
  template: `
  <nav class="nav">
    <a href="#!/"><i class="material-icons">home</i></a>
    <a href="#!/connections"><i class="material-icons">people_outline</i></a>
    <a href="#!/messages"><i class="material-icons">chat_bubble_outline</i></a>
    <a href="#!/alerts"><i class="material-icons">notifications_none</i></a>
    <a href="#!/resources"><i class="material-icons">local_pharmacy<a href="#!/resources"></i></a>
  </nav>

  <h1>Doctor's Notes</h1>

  <section ng-repeat="item in $ctrl.notes">
    <h3>{{ item.title }}</h3>
  </section>
  `,
  controller: function(){
    const vm = this;
    vm.notes = [
      {
        title: "Dr. Ipsum Appt Summary",
        content: "filler text"
      },
      {
        title: "Dr. Lorem Appt Summary",
        content: "filler text"
      },
      {
        title: "Dr. Lorem Appt Summary",
        content: "filler text"
      }
    ]
  }

}

angular
.module("app")
.component("docnotes", docnotes);
