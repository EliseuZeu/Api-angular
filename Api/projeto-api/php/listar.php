<?php

  //incluir conexao
  include("./conexao.php");

  //sql
  $sqlquery = "SELECT * FROM cursos";

  $executar = mysqli_query($conexao, $sqlquery);

  $cursos = [];

  //indice
  $indice = 0;

  //laço
  while($linha = mysqli_fetch_assoc($executar)){
    $cursos[$indice]['idCurso'] = $linha['icCurso'];
    $cursos[$indice]['nomeCurso'] = $linha['nomeCurso'];
    $cursos[$indice]['valorCurso'] = $linha['valorCurso'];

    $indice ++;
  }

  //JSON
  json_encode(['dados' => $cursos]);

?>
