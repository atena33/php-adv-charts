<?php
  include  "database.php";
?>
<?php
  header ('Content-Type: application/json');
  echo json_encode ($graphs);
?>
<?php
  foreach ($graphs as $value) {
    $fatturato = $value['fatturato'];
    foreach ($fatturato as $valore) {
      $type = $valore['type'];
      $data = $valore['data'];
      
      for ($i=0; $i < count($data); $i++) {
        $dato = $data[$i];
        echo ('dato') . $dato . '<br>';
      }
    }

  }

  // foreach ($fatturato as $value) {
  //   $type = $fatturato['type'];
  //   $data = $fatturato['data'];
  //   for ($i=0; $i < count($data); $i++) {
  //     $dato = $data[$i];
  //     echo ('dato') . $dato . '<br>';
  //   }

?>
