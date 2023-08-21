<?php
	    $to = "sales@venkateshwararealty.co.in";
		$data = json_decode(file_get_contents('php://input'), true);
		$from = $data['email'];
	    $name = $data['name'];
	    $lastname = $data['lastname'];
	    $subject = $data['subject'];
	    $cmessage = $data['notes'];
	    $headers = "From: $from";
		$headers = "From: " . $from . "\r\n";
		$headers .= "Reply-To: ". $from . "\r\n";
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

	    $logo = "https://venkateshwararealty.co.in/vr-2.png";
	    $link = "www.venkateshwararealty.co.in";

		$body = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Express Mail</title></head><body>";
		$body .= "<table style='width: 100%;'>";
		$body .= "<thead style='text-align: center;'><tr><td style='border:none;' colspan='2'>";
		$body .= "<a href='{$link}'><img src='{$logo}' alt=''></a><br><br>";
		$body .= "</td></tr></thead><tbody><tr>";
		$body .= "<td style='border:none;'><strong>Name:</strong> {$name} {$lastname}</td>";
		$body .= "<td style='border:none;'><strong>Email:</strong> {$from}</td>";
		$body .= "</tr>";
		$body .= "<tr><td style='border:none;'><strong>Subject:</strong> {$subject}</td></tr>";
		$body .= "<tr><td style='border:none;'><strong>Message:</strong> {$cmessage}</td></tr>";
		$body .= "</tbody></table>";
		$body .= "</body></html>";

	    $send = mail($to, $subject, $body, $headers);

?>