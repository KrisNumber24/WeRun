WRCtrl.controller('ItinCtrl', function ($scope) {
  $scope.$on('$ionicView.enter', function(e) {
  })

    $scope.notification = 1;

    $scope.demandes = [
      {
        prenom :'Emilie',
        nom :'Girard',
        img :'img/emilie.png'
      }
    ]

    $scope.itineraires = [
    {
      date :'Ven 25 Janvier',
      heure:'18h',
      lieu : 'Roissy-en-Bry',
      distance : 10,
      denivele : 7,
      img: 'img/itin1.png',
      demande:true
    },
    {
      date : 'Lundi 20 Janvier',
      heure:'17h30',
      lieu : 'Vincennes',
      distance : 18,
      denivele : 4,
      img: 'img/itin2.png',
      demande:false
    }]

})
