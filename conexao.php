<?php
    $hostname = "localhost";
    $bancodedados = "feedback";
    $usuario = "root";
    $senha = "";

    $mysqli = new mysqli($hostname, $usuario, $senha, $bancodedados);
    if ($mysqli->connect_errno) {
        echo "Falha ao conectar: (". $mysqli->connect_errno .") " . $mysqli->connect_error;
    } else {
        echo "Conectado!";
    }

    $nome = $_POST['nome'];
    $feedback = $_POST['feedback'];

    $sql = "INSERT INTO feedbacks (feedback, nome) VALUES ('$feedback', '$nome')";

    if ($mysqli->query($sql) === TRUE) {
        echo "Dados inseridos com sucesso!";
    } else {
        echo "Erro ao inserir os dados: " . $mysqli->error;
    }

    $mysqli->close();
?>