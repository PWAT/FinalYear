<?php
  $dbServer="localhost";
  $dbUsername="PaulWTea";
  $dbPassword="FinalYear12";
  $databaseName="test";  
   
   $db=mysql_connect("$dbHost","$dbUsername","$dbPassword");
   mysql_select_db($databaseName,$db);
?>