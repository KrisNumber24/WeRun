WRCtrl.controller('ContactCtrl', function ($scope) {

  $scope.$on('$ionicView.enter', function(e) {
    console.log("ContactCtrl fonctionne !");
  })

  $scope.suggest = [
  {
    prenom:'Michael',
    nom:'Gris',
    photo : 'img/michael.png'
  },
  {
    prenom:'Cléo',
    nom:'Gontrand',
    photo : 'img/cléo.png'
  },
  {
    prenom:'Hannah',
    nom:'Mbengue',
    photo : 'img/hannah.png'
  },
  {
    prenom:'Kevin',
    nom:'Maes',
    photo : 'img/kevin.png'
  },
  {
    photo : 'img/more.png'
  }]

  $scope.amis = [
  {
    prenom : 'Julie',
    nom : 'Dubois',
    age : 19,
    coureur :'Performer',
    interet : ['Discussion','Bien être'],
    photo : 'img/julie.png',
    session : 45
  },
  {
    prenom : 'François',
    nom : 'Grondin',
    age : 39,
    coureur :'Débutant',
    interet : ['Discussion','Rencontres'],
    photo : 'img/françois.png',
    session : 6
  },
  {
    prenom : 'Arthur',
    nom : 'Petit',
    age : 28,
    coureur :'Performer',
    interet : ['Challenge'],
    photo : 'img/arthur.png',
    session : 36
    },
    {
      prenom : 'Emilie',
      nom : 'Girard',
      age : 22,
      coureur :'Expérimenté',
      interet : ['Discussion','Bien-être'],
      photo : 'img/emilie.png',
      session : 18
    },
    {
    prenom : 'Léo',
    nom : 'Martin',
    age : 23,
    coureur :'Expérimenté',
    interet : ['Discussion','Bien être'],
    photo : 'img/leo.png',
    session : 12
  }]

})
