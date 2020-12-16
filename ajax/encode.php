<?php
include('random.php');
$code = $_POST['code_'];
/*
<?php $JxpQWEXF="\x62\141\x73\x65\x36\x34\x5f\144\145\x63\x6f\x64\145";eval($JxpQWEXF("ID8+YTw/cGhwIA==")); ?>
*/
$rand = random(8);
$encode = base64_encode($code);
$output = '<?php $' . $rand . '="\x62\141\x73\x65\x36\x34\x5f\144\145\x63\x6f\x64\145";eval($' . $rand . '("' . $encode . '")); ?>';

echo $output;
