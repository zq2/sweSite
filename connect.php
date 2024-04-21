<?php
    $firstname = $_POST['fullname'];
    $email = $_POST['email'];
    $password = $_POST['password'];


$conn = new mysqli("localhost", "root", "", "swesite");
$conn->query("INSERT INTO users (fullname, email, password) VALUES ('$fullname', '$email', '$password')");
$conn->close();
?>