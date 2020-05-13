<?php
  include  "database.php";
?>
<?php
  header ('Content-Type: application/json');
  echo json_encode ($graphs);
?>


<?php
  $fatturato_by_agent = $graphs['fatturato_by_agent'];
  $graph_type= $fatturato_by_agent ['type'];
  $data_agent = $fatturato_by_agent['data'];
  $values = array_values($data_agent);
  $names = array_keys($data_agent);


  


?>
