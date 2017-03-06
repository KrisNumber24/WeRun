<?php

  require_once('/infos/dbConnection.inc.php');

  class DataBase {

    private static $db;

    private function __construct() {

    }

    public static function getDb() {
      if (!isset(self::$db)) {
        self::$db = new DataBase();
      }

      return self::$db;
    }

    public function select(
      $primaryTable,
      $joins,
      $fields,
      $where,
      $groupBy,
      $order
    ) {

      $pdoDb = new PDO('mysql:host=' . DB_HOST . ';' .
        'dbname=' . DB_NAME . ';' .
        'charset=utf8mb4',
        DB_USER,
        DB_PASSWD);

      $requestStr = $this->buildSelectRequestStr(
        $primaryTable,
        $joins,
        $fields,
        $where,
        $groupBy,
        $order
      );

      // echo "REQUEST = " . $requestStr;

      $stmt = $pdoDb->query($requestStr);

      $result = array();

      while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
          array_push($result, $row);
      }

      header('Content-Type: application/json');
      echo ''. json_encode($result) .'';
    }

    public function insert($table, $data) {
      $pdoDb = new PDO('mysql:host=' . DB_HOST . ';' .
        'dbname=' . DB_NAME . ';' .
        'charset=utf8mb4',
        DB_USER,
        DB_PASSWD);

        $requestData = $this->buildInsertRequestStr($table, $data);

        // echo "REQUEST = " . $requestData['request_string'];

        $stmt = $pdoDb->prepare($requestData['request_string']);
        $stmt->execute($requestData["request_datas"]);
    }

    private function buildSelectRequestStr(
      $primaryTable,
      $joins,
      $fields,
      $where,
      $groupBy,
      $order
    ) {

      $requestStr = '';

      $selectPart = "SELECT\n";
      $fromPart   = "FROM\n";
      $joinPart   = "LEFT JOIN\n";
      $wherePart  = "WHERE\n";
      $orderPart  = "ORDER BY\n";
      $groupPart  = "GROUP BY\n";

      foreach ($fields as $key => $value) {
        $selectPart .= $value . ', ';
      }

      $selectPart = substr_replace($selectPart, "\n", -2);

      $fromPart .= $primaryTable . "\n";

      foreach ($joins as $key => $join) {
        $joinPart .= $join['table'] . "\n";
        $joinPart .= 'ON ' . $join['on'] . "\n";
      }

      foreach ($where as $key => $value) {
        $wherePart .= $value . "\n";
      }

      foreach ($groupBy as $key => $groupParam) {
        $groupPart .= $groupParam . ', ';
      }

      if (sizeof($order) == 2) {
        $orderPart .= $order[0] . ' ' . $order[1];
      }

      $requestStr .= $selectPart . $fromPart;

      if (sizeof($joins) > 0) {
        $requestStr .= $joinPart;
      }

      if (sizeof($where) > 0) {
        $requestStr .= $wherePart;
      }

      if (sizeof($groupBy) > 0) {
        $groupPart = substr_replace($groupPart, "\n", -2);
        $requestStr .= $groupPart;
      }

      if(sizeof($order) > 0) {
        $requestStr .= $orderPart;
      }

      return $requestStr;
    }

    private function buildInsertRequestStr($table, $data) {
      $requestStr = "INSERT INTO \n";
      $requestStr .= ' ' . $table;

      $columnsStr = '(';
      $valuesStr  = '(';
      $datasToInsert = array();

      foreach ($data as $column => $colValue) {
        $columnsStr .= $column . ", ";
        $valueId = ':' . $column;
        $valuesStr  .= $valueId  . ", ";
        $datasToInsert[$valueId] = $colValue;
      }

      $columnsStr = substr_replace($columnsStr, ")\n", -2);
      $valuesStr = substr_replace($valuesStr, ")\n", -2);

      $requestStr .= $columnsStr . "\n" .
        "VALUES \n" . $valuesStr;

      $insertDatas = array("request_string" => $requestStr, "request_datas" => $datasToInsert);

      return $insertDatas;


    }

  }

 ?>
