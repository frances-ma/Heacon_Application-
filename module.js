"use strict";

angular
    .module("app", ["ngRoute"])
    .config(($routeProvider) =>{
        $routeProvider
        .when("/", {
          template: "<main></main>"
        })
        .when("/resources", {
          template: "<resources></resources>"
        })
    });
