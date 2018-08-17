"use strict";

const medlist = {
  template: `


  <nav class="nav">

    <a href="#!/"><i class="material-icons">home</i></a>

    <a href="#!/connections"><i class="material-icons">people_outline</i></a>

    <a href="#!/messages"><i class="material-icons">chat_bubble_outline</i></a>

    <a href="#!/alerts"><i class="material-icons">notifications_none</i></a>

    <a href="#!/resources"><i class="material-icons">local_pharmacy<a href="#!/resources"></i></a>

  </nav>

<div class="medlistcontainer">
  <h1>Medication List</h1>
    <p class="medlistlabel">A place to store and track your medications</p>
      <input type="text" class="medfilter" placeholder="Filter your list by name" ng-model="itemName">

        <ol>
          <li ng-repeat="item in $ctrl.list | filter: itemName track by $index"
          ng-class="{ 'completed': item.completed === true}">
            <h4> {{ item.name }} </h4>
            <p> {{ item.dose }} </p>
            <p> {{ item.time }} </p>

            <input type="checkbox" checked="checked" value="checked" class="checkbox" ng-if="item.completed === true"
            ng-show="showme=true" ng-click="showme=false">

            <button type="button" class="complete" ng-if="item.completed === false"
            ng-click="$ctrl.completeItem($index);">Mark As Taken</button>

            <button type="button" class="refresh" ng-if="item.completed === true"
            ng-click="$ctrl.removeClass($index);">Reset</button>

            <button type="button" class="remove" ng-click="$ctrl.removeItem($index);">Remove From List</button>
          </li>
        </ol>



  <form ng-submit="$ctrl.addItem()" class="newmed">
    <h3>Add a new medication here: </h3>
      <input type="text" ng-model="$ctrl.newItem.name" placeholder="Add medication name">
      <input type="text" ng-model="$ctrl.newItem.dose" placeholder="Add medication dose">
      <input type="text" ng-model="$ctrl.newItem.time" placeholder="Add medication time">

      <button class="addmed">Add</button>
  </form>

</div>
  `,
  controller: function(){
    const vm = this;
    vm.list = [
      {
      name: "Lorem",
      dose: "10mg",
      time: "once daily",
      completed: false
    },
      {
      name: "Ipsum",
      dose: "30mg",
      time: "6:00pm",
      completed: true
    },
      {
      name: "Aspirin",
      dose: "10mg",
      time: "2:00pm",
      completed: false
    },

  ];
  //Adds items
    vm.addItem = ()=> {
      vm.list.push({
        name: vm.newItem.name,
        dose: vm.newItem.dose,
        time: vm.newItem.time,
        completed: false
      });
      vm.newItem = {};
    }
  //Removes items from list
    vm.removeItem = (index)=> {
      vm.list.splice(index, 1);
    }
  //Marks items as complete
    vm.completeItem = (index)=> {
      vm.list[index].completed = true;
    }
    vm.removeClass = (index)=> {
      vm.list[index].completed = false;
    }
  }
}
angular
.module("app")
.component("medlist", medlist);
