# mySQL angular API

Some simple php scripts to send mySQL query on our DB

## Install
1. Copy the folder `data_access` in your local server (xamp, wamp, easyPHP, whatever ...) in directory `www/WeRunDB`.
2. Create a second folder in www named `infos`
3. Here write a php script named `dbConnection.inc.php` containing following lines:
````php
<?php

  const DB_HOST = "{the host name (in general localhost)}";
  const DB_USER = "{your DB user name}";
  const DB_PASSWD = "{your DB user password}";
  const DB_NAME = "werun"

 ?>
````

## Query example

For example if we want to get friends list in ContactCtrl :
````js
// json data to send to the server
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

// Ajax call to send query and receive data from DB
$http.post('http://localhost/WeRunDB/', JSON.stringify(friendsRequest))
.then(function(response) {
  console.log(response);
  $scope.amis = response.data;
})
````

The request above sent with `$http.post` and ``friendsRequest`` data create following request :
````php
REQUEST = SELECT
name as nom, age, runner_type, count(werun_session_user.user_id) as session
FROM
werun_runner
LEFT JOIN
werun_session_user
ON werun_session_user.user_id = werun_runner.id
GROUP BY
werun_runner.name
````

And return following JSON :
````json
[
  {
    "nom":"Chris",
    "age":"22",
    "runner_type":"confirm\u00e9",
    "session":"1"
  },

  {
    "nom":"Paulo",
    "age":"25",
    "runner_type":"Grand Fou",
    "session":"0"
  },

  {
    "nom":"Sophie",
    "age":"22",
    "runner_type":"D\u00e9butant",
    "session":"1"
  }
]
````
