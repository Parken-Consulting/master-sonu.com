
<html>
<head>
<?php include_once 'dbwork/dbconfig.php';?>
</head>
<body bgcolor="#048073" style="font-size:larger">
<div align="right"><!--<a href="./formdatabase/admin/logout1.php" class=" iceMenuTitle"><span class="icemega_title">Logout</span></a>-->
<h3 align="center" style="color:#F1F002"><b>****GOPALGANJ STUDENT REGISTRATION DETAILS****</b></h3></div>

 <!--dyanemic gallary-->
<?php
	$sql="SELECT * FROM done1";
	$result_set=mysql_query($sql);
	while($row=mysql_fetch_array($result_set))
	{
		?>
<table width="887" border="1" align="center">
<marquee direction="up">
<tr align="center" bgcolor="#E594FB" bordercolor="#FFCE00">
<td><b>ID</b></td>
<td><b>NAME</b></td>
<td><b>REG. NO. DATE</b></td>
<td><b>DESIGNATION</b></td>
<td><b>PHOTO</b></td>

        <tr align="center" bgcolor="#ABF1F3">
        <td width="42" height="104"><b><?php echo $row["id"]?></b></td>
        <td width="249"><b><?php echo $row["name"]?></b></td>
        <td width="212"><b><?php echo $row["regdate"]?></b></td>
        <td width="215"><b><?php echo $row["desi"]?></b></td>
        <td width="135"><img src="dbwork/gopalganj/<?php echo $row["photo"]?>" width="135" height="150"></td>  
        </tr></marquee></table>
              <?php
	}
			?>
            <!--end gallary-->  
 </body></html>