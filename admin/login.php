<?php 
include_once("connection/db_connect.php");
if($_SERVER['REQUEST_METHOD']=="POST"){
$user=$_POST['username'];
$pass=$_POST['password'];
$sql= "select * from admin_details where email_address='$user' and password='$pass' and admin_type='SA'";
$query=mysql_query($sql) or die(mysql_error());

if(mysql_num_rows($query)==0){

			      header('location:../index.html?msg=invalid');

			   }
			   else{
			   			   
			   while($row=mysql_fetch_array($query))
			   {
				   $user_name=$row['name'];
			   }
			   $_SESSION['user']=$user_name;
			   header("location:../admin.php");
			      }

} 
?>