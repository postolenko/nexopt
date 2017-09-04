<?php

$name = strip_tags($_POST['name']);
$email = strip_tags($_POST['email']);
$tel = strip_tags($_POST['tel']);
$msg = strip_tags($_POST['msg']);

// $toaddress = "juliad012@mail.ru";
$toaddress_first = "denis.postolenko@gmail.com";
$toaddress_second = "denis.postolenko@gmail.com";
$subject = 'Обратная связь';
$mailcontent = "<p><b>Имя:</b> $name<br>
				<b>Email:</b> $email<br>
				<b>Телефон:</b> $tel <br>
				<b>Сообщение:</b> $msg<br>";
$from_name = "NexOpt";
$from_email = "mail.nexopt.nichost.ru";

$headers = "MIME-Version: 1.0\r\n";
$headers.= "From: =?utf-8?B?".base64_encode($from_name)."?= <".$from_email.">\r\n";
$headers .= "Content-type: text/html; charset=\"utf-8\"";

mail( $toaddress_first, "=?utf-8?B?".base64_encode($subject)."?=", $mailcontent, $headers );
mail( $toaddress_second, "=?utf-8?B?".base64_encode($subject)."?=", $mailcontent, $headers );

echo "<span>Спасибо! Ваше сообщение отправлено! Наш менеджер свяжется с вами в самое ближайшее время!</span>";

?>