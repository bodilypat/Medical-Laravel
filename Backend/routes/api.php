<!-- REST routing -->
<?php

require_once '../Http/controllers/PatientController.php';


$request = $_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];

// Remove query string
$request = strtok($request, '?');

// Routes 
if ($request === '/api/patients' && $method === 'GET') {
    $controller = new PatientController();
    $controller->getAllPatients();
} elseif (preg_match('/\/api\/patients\/(\d+)/', $request, $matches) && $method === 'GET') {
    $controller = new PatientController();
    $controller->getPatientById($matches[1]);
} elseif ($request === '/api/patients' && $method === 'POST') {
    $controller = new PatientController();
    $controller->createPatient();
} elseif (preg_match('/\/api\/patients\/(\d+)/', $request, $matches) && $method === 'PUT') {
    $controller = new PatientController();
    $controller->updatePatient($matches[1]);
} elseif (preg_match('/\/api\/patients\/(\d+)/', $request, $matches) && $method === 'DELETE') {
    $controller = new PatientController();
    $controller->deletePatient($matches[1]);
} else {
    http_response_code(404);
    echo json_encode(["message" => "Endpoint not found."]);
}

