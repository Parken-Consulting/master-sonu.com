<?php
session_start();
if(session_destroy())
{
header("Location:/panditplanet/formdatabase/index.html?msg=out");
}
?>