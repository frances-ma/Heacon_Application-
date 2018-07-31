"use strict";

angular
    .module("app", ["ngRoute"])
    .config(($routeProvider) =>{
        $routeProvider
        .when("/resources", {
          template: "<resources></resources>"
        })
    });
