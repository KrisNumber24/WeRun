WRCtrl.controller('TchatCtrl', function ($scope) {
  $scope.$on('$ionicView.enter', function(e) {
    console.log("TchatCtrl fonctionne !");

    $scope.discussion = [
    {
      prenom:'Michael',
      nom:'Gris',
      photo : 'img/michael.png',
      phrase: "Salut mec, tu peux m'envoyer les photos de la derniere session?",
      lu:false
    },
    {
      prenom:'Cléo',
      nom:'Gontrand',
      photo : 'img/cléo.png',
      phrase: "Salut! ça te dit une petite session de running Vendredi prochain ?",
      lu:true
    },
    {
      prenom:'Hannah',
      nom:'Mbengue',
      photo : 'img/hannah.png',
      phrase: "Je ne vais pas pouvoir venir samedi finalement je dois aller",
      lu:false
    },
    {
      prenom:'Arthur',
      nom:'Jofre',
      photo : 'img/arthur.png',
      phrase: "Est-ce que ça t'interesse un entrainement pour le marathon",
      lu:true
    },
    {
      prenom:'Jade',
      nom:'Dubois',
      photo : 'img/jade.png',
      phrase: "J'ai essayé de te contacter par téléphone",
      lue:true
    },
    {
      prenom:'Léo',
      nom:'Jo',
      photo : 'img/leo.png',
      phrase: "Tu veux y aller en fin de semaine ?",
      lu:true
    },
    {
      prenom:'François',
      nom:'Claude',
      photo : 'img/françois.png',
      phrase: "Non désolé, je peux vraiment pas demain",
      lu:true
    }]
  })
})
