<?php
  include  "database.php";
?>
<?php
  header ('Content-Type: application/json');
?>


<?php

  $fatturato = [
    'fatturato' => $graphs['fatturato']
  ];
 $fatturato_by_agent = [
   'type' => $graphs['fatturato_by_agent']['type']
 ];

  $labels = [];
  $data = [];

  foreach ($graphs['fatturato_by_agent']['data'] as $name => $value) {
    $labels[] = $name;
    $data[] = $value;
  }
  $fatturato_by_agent['labels'] = $labels;
  $fatturato_by_agent['data'] = $data;
  $fatturato['fatturato_by_agent'] = $fatturato_by_agent;

  echo json_encode ($fatturato);
?>
