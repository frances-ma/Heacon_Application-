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

    <section class="newnotecontainer">
      <button ng-click="$ctrl.showForm();" class="newnote notebtn">New Note</button>
    </section>

    <form ng-show="$ctrl.show" class="addnote" ng-submit="$ctrl.onSubmit($ctrl.newNote); $ctrl.closeForm();">

      <section class="close">
        <i class="material-icons" ng-click="$ctrl.closeForm();">close</i>
      </section>

        <section class="addnoteform">
          <input type="text" placeholder="title of new note" ng-model="$ctrl.newNote.title">
            <textarea placeholder="note goes here" ng-model="$ctrl.newNote.content"></textarea>
            <button class="savenote notebtn">Save</button>
        </section>
    </form>

    <section ng-repeat="item in $ctrl.notes | filter: itemName track by $index" class="notes">

      <h3 ng-click="$ctrl.showNote($ctrl.$index);">{{ item.title }}</h3>

      <form ng-show="$ctrl.showThisNote">
        <h3>{{ $ctrl.notes[$index].title }}</h3>
          <p>{{ $ctrl.notes[$index].content }}</p>
          <button class="savenote notebtn" ng-click="$ctrl.closeNote();">Save</button>
      </form>

      <button type="button" ng-click="$ctrl.deleteNote($ctrl.$index);" class="deletenote notebtn">Delete Note</button>
    </section>

  `,
  controller: function(){
    const vm = this;
    vm.notes = [
      {
        title: "Dr. Ipsum (Neurologist) Appt Summary",
        content: "filler text"
      },
      {
        title: "Dr. Lorem Prescription Refill",
        content: "filler text"
      },
      {
        title: "Dr. Satler Appt Summary",
        content: "filler text"
      }
    ];
      vm.showForm = ()=> {
        //this shows the form for a new note
        vm.show = true;
      }
      vm.closeForm = ()=> {
      vm.show = false;
      vm.newNote = {};
      }
      vm.onSubmit = (newNote) => {
      vm.notes.unshift({
        title: newNote.title,
        content: newNote.content
      });
      vm.newNote = {};
      }
      vm.deleteNote = (index) => {
        vm.notes.splice(index, 1);
      }
      vm.showNote = (index) => {
        vm.showThisNote = true;
      }
      vm.closeNote = (index) => {
        vm.showThisNote = false;
      }
 }

}

angular
.module("app")
.component("docnotes", docnotes);
