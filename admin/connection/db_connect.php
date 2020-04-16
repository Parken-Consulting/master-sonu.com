<?php
include_once('db_config.php');
${link}=@mysql_connect(${dbHost}, ${dbUser}, ${dbPass}) or die("unable to connect the data base server");
       @mysql_select_db(${dbName}, ${link}) or die("sorry! for the inconvenience");
?> 