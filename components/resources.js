"use strict";

const resources = {
    template: `
    <h1>Heacon</h1>

    <p>Testing testing?</p>
    `
}

angular
.module("app")
.component("resources", resources);
