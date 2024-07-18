<?php

  // Incluir conexão
  include("conexao.php");

  // Obter os dados enviados via POST
  $obterDados = file_get_contents("php://input");

  // Decodificar os dados JSON
  $extrair = json_decode($obterDados);

  // Extrair os dados específicos do curso
  $nomeCurso = $extrair->cursos->nomeCurso;
  $valorCurso = $extrair->cursos->valorCurso;

  // SQL para inserir os dados no banco de dados
  $sql = "INSERT INTO cursos(nomeCurso, valorCurso) VALUES ('$nomeCurso', $valorCurso)";
  mysqli_query($conexao, $sql);

  // Preparar a resposta
  $curso = [
    'nomeCurso' => $nomeCurso,
    'valorCurso' => $valorCurso
  ];

  // Enviar a resposta como JSON
  echo json_encode(['curso' => $curso]);
?>
