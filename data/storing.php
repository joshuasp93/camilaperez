<?php

$name = $_POST('name');
$email = $_POST('email');
$date = date('d/m/y == H:i:s');

$file_open = fopen("contact_data.csv", "a");
$no_rows = count(file("contact_data.csv"));
if($no_rows > 1) {
  $no_rows = ($no_rows - 1) + 1;
}
$form_data = array(
  'sr_no' => $no_rows,
  'name' => $name,
  'email' => $email,
  'date' => $date
);
fputcsv($file_open, $form_data);

?>
