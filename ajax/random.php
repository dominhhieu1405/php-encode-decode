<?php
function random($number) {
	$value = '';
	$rand = '';
	$i = 0;
	 $characters = array('1','a','q','B','Q','X','H','L','b','s','2','A','d','D','w','f','c','Y','3','J','U','E','e','g','S','4','M','n','r','R','5','v','h','t','6','y','m','N','7','j','u','K','C','8','T','i','W','k','G','V','P','9','z','Z','o','x','I','F','0','p','l','O');
	while ($i < $number) {
	$rand = rand(0, 62);
	$character = $characters[$rand];
	$value = $value . $character;
	$i++;
	}
	return $value;
}