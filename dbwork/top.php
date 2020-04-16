<?php
include_once 'dbconfig.php';
?>


<div id="body">
	<form action="utop.php" method="post" enctype="multipart/form-data">
	<input type="file" name="file" placeholder="Enter Photo" />
    <input type="text" name="fmarks" placeholder="Enter Persentage" class="element text large" required  width="200">
    <input type="text" name="fname" placeholder="Entername" class="element text large" required  width="200">
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
<?php
include_once 'footer.php';
?>