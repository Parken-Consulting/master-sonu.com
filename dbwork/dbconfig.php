<?php
$dbhost = "localhost";
$dbuser = "osinfoit";
$dbpass = "San@02028619";
$dbname = "sanparam";
mysql_connect($dbhost,$dbuser,$dbpass) or die('cannot connect to the server'); 
mysql_select_db($dbname) or die('database selection problem');
?>