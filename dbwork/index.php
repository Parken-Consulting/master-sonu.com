<?php
include_once 'dbconfig.php';
?>
<div id="body">
	<form action="upload.php" method="post" enctype="multipart/form-data">
	<input type="file" name="file" />
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
