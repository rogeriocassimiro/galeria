'use strict';

galeriaApp.config(function($ionicConfigProvider, $stateProvider, $urlRouterProvider) {

    //$ionicConfigProvider.backButton.previousTitleText(false).text('').icon('ion-chevron-left');

    $stateProvider.
    state('login', {
        url: '/login',
        abstract: false,
        templateUrl: 'templates/login.html',
        controller: "LoginCtrl",
        cache: false
    }).
    state('home', {
        url: '/home',
        abstract: false,
        templateUrl: 'templates/home.html',
        controller: "HomeCtrl",
        cache: false
    }).
    state('homeDetalhe', {
        url: '/homeDetalhe',
        abstract: false,
        templateUrl: 'templates/homeDetalhe.html',
        controller: "HomeDetalheCtrl",
        params: {
            homeCtrl: []
        },
        cache: false
    })

    $urlRouterProvider.otherwise('/home');

});