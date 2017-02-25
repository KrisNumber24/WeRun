WRCtrl.controller('FilCtrl', function ($scope) {

  $scope.$on('$ionicView.enter', function(e) {
    console.log("FilCtrl fonctionne !");
  })

  $scope.utilisateurs = [
  {
    prenom : 'Thomas',
    nom : 'Grison',
    age : 25,
    coureur :'Coureur expérimenté',
    interet : ['Discussion','Challenge'],
    photo : 'img/thomas.png',
    session : 10
  },
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
    prenom : 'Léo',
    nom : 'Martin',
    age : 23,
    coureur :'Débutant',
    interet : ['Discussion','Bien être'],
    photo : 'img/leo.png',
    session : 2
  }]

  $scope.notification = 2;

  $scope.news = [
  {
    date :'Auj 21h55',
    texte : 'Félicitations ! Vous venez de terminer votre scéance de running',
    image : 'img/map1.png',
    like : 4,
    comments : 5,
    dist : 15,
    temps : "1h10",
    vitesse : 9,
    accompagnateurs : [
    {
      prenom : 'Hannah',
      img :"img/hannah.png"
    },
    {
      prenom : "Jade",
      img :"img/jade.png"
    },
    {
      prenom: "Arthur",
      img : "img/arthur.png"
    }]
  },
  {
    date :'Hier 15h55',
    texte : 'Troisiéme démarque sur les soldes, -30% sur les chaussures ASICS',
    image : 'img/pub.png',
    like : 28,
    comments : 10,
  },
  {
    date :'Lun 26 Jan 10h21',
    texte : 'Julien Martin a publié un selfie avec vous et Antoine Pommier ! ',
    image : 'img/selfie.png',
    like : 11,
    comments : 1,
  }]


//Identifiant de l'utilisateur connecté => pour tester l'affichage des != utilisateurs
$scope.id = 0;

$scope.AddLike = function(id_news) {
  console.log("Cette fonction doit colorer le coeur et rajouter un like");
}

})
