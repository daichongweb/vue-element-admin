<?php
connent_mysql();

$data = $_POST;

if ($data) {
    $action = $_POST['action'];
    if ($action == 'list') {
        ajaxs(1, 'success');
    }
} else {
    ajaxs(0, 'error');
}

function ajaxs(int $code, string $message, array $data = [])
{
    echo json_encode([
        'code' => $code,
        'message' => $message,
        'data' => $data,
    ]);
}

function connent_mysql()
{
    $servername = "localhost";
    $username = "root";
    $password = "root";

    // 创建连接
    $conn = mysqli_connect($servername, $username, $password, 'test');

    // 检测连接
    if (!$conn) {
        exit("Connection failed: " . mysqli_connect_error());
    }
}
