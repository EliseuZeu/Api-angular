<?php

  // Incluir conexão
  include("conexao.php");

  // Obter os dados enviados via POST
  $obterDados = file_get_contents("php://input");

  // Decodificar os dados JSON
  $extrair = json_decode($obterDados);

  // Extrair os dados específicos do curso
  $idCurso = $extrair->cursos->idCurso;

  // SQL para inserir os dados no banco de dados
  $sql = "DELETE FROM cursos WHERE idCursos=$idCurso";
  mysqli_query($conexao, $sql);

  // Enviar a resposta como JSON
  echo json_encode(['curso' => $curso]);
?>
