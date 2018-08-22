"use strict";

const docfolder = {
  template: `
  <nav class="nav">
    <a href="#!/"><i class="material-icons">home</i></a>
    <a href="#!/connections"><i class="material-icons">people_outline</i></a>
    <a href="#!/messages"><i class="material-icons">chat_bubble_outline</i></a>
    <a href="#!/alerts"><i class="material-icons">notifications_none</i></a>
    <a href="#!/resources"><i class="material-icons">local_pharmacy<a href="#!/resources"></i></a>
  </nav>

  <h1>Medical Document Folder</h1>

  <section ng-repeat="item in $ctrl.docs track by $index" class="docs">
      <i class="material-icons">folder</i>
      <h3>{{ item.name }}</h3>
  </section>

  `,
  controller: function() {
    const vm = this;
    vm.docs = [
      {
        name: "Images"
      },
      {
        name: "Insurance Cards"
      },
      {
        name: "Med History Documents"
      }
    ]
  }
}

angular
.module("app")
.component("docfolder", docfolder);
