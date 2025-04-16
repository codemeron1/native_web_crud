<?php 

// Set the response content type to JSON
header('Content-Type: application/json');

// Read raw POST data from the request body and decode it from JSON to an associative array
$data = json_decode(file_get_contents("php://input"), true);

$username = $data["uname"];
$password = $data["pword"];




