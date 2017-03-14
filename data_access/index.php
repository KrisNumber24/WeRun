<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

  require_once('/database.php');

  $query = "{
    \"requestType\": \"select\",
    \"primaryTable\": \"werun_runner\",
    \"joins\": [
      {
        \"table\": \"werun_session_user\",
        \"on\": \"werun_session_user.user_id = werun_runner.id\"
      }
    ],
    \"fields\": [
      \"name as nom\",
      \"age\",
      \"runner_type\",
      \"count(werun_session_user.user_id) as session\"
    ],
    \"groupBy\": [
      \"werun_runner.name\"
    ],
    \"orderBy\": [\"name\", \"ASC\"]
  }";

  // echo $query;
  // $query = json_decode($query, true);
  $query = json_decode(file_get_contents("php://input"), true);

  // var_dump($query);

  //echo "YOLO";

  $db = DataBase::getDb();

  if (!isset($query['requestType'])) {
    echo "requestType is not defined in " . $query;
    return;
  }

  if ($query['requestType'] == 'select') {

    if (!isset($query['joins'])) {
      $query['joins'] = [];
    }
    if (!isset($query['fields'])) {
      $query['fields'] = ['*'];
    }
    if (!isset($query['where'])) {
      $query['where'] = [];
    }
    if (!isset($query['groupBy'])) {
      $query['groupBy'] = [];
    }
    if (!isset($query['order'])) {
      $query['orderBy'] = [];
    }

    $db->select(
      $query['primaryTable'],
      $query['joins'],
      $query['fields'],
      $query['where'],
      $query['groupBy'],
      $query['orderBy']
    );
  }
  elseif ($query['requestType'] == 'insert') {
    $db->insert(
      $query['table'],
      $query['data']
     );
  }
  elseif ($query['requestType'] == 'transaction') {
    $db->transaction($queries);
  }

  // $db->select("werun_runner",   // Base table
  //   [],                         // Joined tables
  //   [                           // Required fields
  //     'name' => null,// Fields with where clause
  //     'age' => null,
  //     'runner_type' => null
  //   ],
  //   ['name', 'ASC']);           // Order by

 ?>
