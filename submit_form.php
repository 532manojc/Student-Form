<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "student_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$usn = $_POST['usn'];
$age = $_POST['age'];
$branch = $_POST['branch'];

$sql = "INSERT INTO students (first_name, last_name, usn, age, branch) VALUES ('$first_name', '$last_name', '$usn', '$age', '$branch')";

if ($conn->query($sql) === TRUE) {
    // Return a success message to the JavaScript
    echo 'success';
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
