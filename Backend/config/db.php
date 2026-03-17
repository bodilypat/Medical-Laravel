<!-- config/db.php for PHP backend using MySQL -->
<?php

class Database {
    private $host = "localhost"; // Database host
    private $db_name = "medical_db"; // Database name
    private $username = "root"; // Database username
    private $password = ""; // Database password
    public $conn;

    // Get the database connection
    public function getConnection() {
        $this->conn = null;

        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        } catch(PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();
        }

        return $this->conn;
    }
}
