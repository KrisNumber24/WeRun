WRCtrl.controller('ParamCtrl', function ($scope) {
  $scope.$on('$ionicView.enter', function(e) {
    console.log("ParamCtrl fonctionne !");
  })

  $scope.settingsList = [
    { text: "Notifications", checked: true },
    { text: "Géolocalisation", checked: true },
    { text: "Sons dans l'application", checked: false },
    { text: "Discussion instantanée", checked: true }
  ];

  $scope.personnalList = [
    { text: "Changer sa bio"},
    { text: "Changer sa photo"},
    { text: "Télécharger ses statistiques"}
  ];
})
