WRCtrl.controller('ContactCtrl', function ($scope, $http) {

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

  $scope.amis = [];

  friendsRequest = {
    requestType: 'select',
    primaryTable: 'werun_runner',
    joins: [
      {
        table: 'werun_session_user',
        on: 'werun_session_user.user_id = werun_runner.id'
      }
    ],
    fields: [
      'first_name as nom',
      'name as prenom',
      'age',
      'runner_type as coureur',
      'count(werun_session_user.user_id) as session'
    ],
    orderBy: ['name', 'ASC'],
    where: [
      "werun_session_user.user_id IS NULL",
      "or werun_session_user.user_id IS NOT NULL"
    ],
    groupBy: [
      "werun_runner.name"
    ]
  };

  $http.post('http://localhost/WeRunDB/', JSON.stringify(friendsRequest))
  .then(function(response) {
    console.log(response);
    $scope.amis = response.data;
  })

})
