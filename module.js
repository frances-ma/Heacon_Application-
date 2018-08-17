"use strict";

angular
    .module("app", ["ngRoute"])
    .config(($routeProvider) =>{
        $routeProvider
        .when("/", {
          template: "<main></main>"
        })
        .when("/connections", {
          template: "<connections></connections>"
        })
        .when("/messages", {
          template: "<messages></messages>"
        })
        .when("/alerts", {
          template: "<alerts></alerts>"
        })
        .when("/resources", {
          template: "<resources></resources>"
        })
        .when("/medlist", {
          template: "<medlist></medlist>"
        })
        .when("/docnotes", {
          template: "<docnotes></docnotes>"
        })
    });
