// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

// Création de l'instance de notre app (on passe en parametre les plugins, controllers et services utilisés par l'app)
var WRApp = angular.module('WeRun', ['ionic','ionic-material','WRCtrl'])
var WRCtrl = angular.module('WRCtrl', []);

WRApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

//Ici on definit les routes de notre application. c'est à dire que pour chaque template on crée un etat qui pourra directement etre appelé ainsi $state.go('home')
WRApp.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('fil', {
    url: "/fil",
    templateUrl: "templates/fil.html",
    controller: "FilCtrl"
  })
  .state('itineraire', {
    url: "/itineraire",
    templateUrl: "templates/itineraire.html",
    controller: "ItinCtrl"
  })
  .state('contact', {
    url: "/contact",
    templateUrl: "templates/contact.html",
    controller: "ContactCtrl"
  })
  .state('tchat', {
    url: "/tchat",
    templateUrl: "templates/tchat.html",
    controller: "TchatCtrl"
  })
  .state('parametre', {
    url: "/parametre",
    templateUrl: "templates/parametre.html",
    controller: "ParamCtrl"
  })
  .state('recherche',{
    url: "/recherche",
    templateUrl: "templates/recherche.html",
    controller: "RechercheCtrl"
  })
  .state('discussion',{
    url: "/discussion",
    templateUrl: "templates/discussion.html",
    controller: "TchatCtrl"
  })
  //Route par defaut -> dans le cas ou le chemin spécifié est invalide, ou a l'ouverture de l'application quand aucun chemin n'est specifié l'application renverra par defaut à cet endroit.
  $urlRouterProvider.otherwise('fil');
})
