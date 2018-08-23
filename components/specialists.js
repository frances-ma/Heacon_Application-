"use strict";

const specialists = {
  template: `
  <nav class="nav">
    <a href="#!/"><i class="material-icons">home</i></a>
    <a href="#!/connections"><i class="material-icons">people_outline</i></a>
    <a href="#!/messages"><i class="material-icons">chat_bubble_outline</i></a>
    <a href="#!/alerts"><i class="material-icons">notifications_none</i></a>
    <a href="#!/resources"><i class="material-icons">local_pharmacy<a href="#!/resources"></i></a>
  </nav>

  <h1>Specialists Near You</h1>

  <p>Under construction...</p>

  <input type="text" placeholder="search for a facility here...">
  <button ng-click=""><i class="material-icons">search</i></button>
  `,
  controller: ["HeaconService", function(HeaconService){
    const vm = this;
    vm.retrieve = (search) =>{
    HeaconService.getInfo(search).then((response)=> {
      vm.storage = response.data;
      console.log(vm.storage);
    })
   }
  }]
}

angular
.module("app")
.component("specialists", specialists);
