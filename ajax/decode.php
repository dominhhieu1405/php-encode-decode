<?php 
include('random.php');
$string = $_POST['code_'];

function xoaphp($strg) {
	$strg = trim($strg, '<?php');
	$strg = trim($strg);
	$strg = trim($strg, '?>');
	$strg = trim($strg); 
	$strg = trim($strg, '<?php');
	$strg = trim($strg);
	$strg = trim($strg, '?>');
	$strg = trim($strg);
	return $strg;
}

    $str = xoaphp($string);
	$str = substr($str, 81, -4);
	$str = xoaphp(base64_decode($str));
echo $str;