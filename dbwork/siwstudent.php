<?php
include_once 'dbconfig.php';
?>


<div id="body">
	<form action="udonation2.php" method="post" enctype="multipart/form-data">
	<input type="file" name="file" />
    <input type="text" name="fname" placeholder="enter name with father name" class="element text large"  width="200">
    <input type="text" name="designation" placeholder="Enter Designation" class="element text large"  width="200">
    <input type="text" name="regdate" placeholder="Enter Registeration no- with date" class="element text large"  width="200">
	<button type="submit" name="btn-upload">upload</button>
	</form>
    <br /><br />
    <?php
	if(isset($_GET['success']))
	{
		?>
       
        <?php
	}
	else if(isset($_GET['fail']))
	{
		?>
       
        <?php
	}
	else
	{
		?>
       
        <?php
	}
	?>
</div>
