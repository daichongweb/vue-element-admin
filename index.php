<?php

header('Content-Type: text/html;charset=utf-8');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST,GET,OPTIONS,DELETE');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Content-Type,Content-Length,Accept-Encoding,X-Requested-with, Origin');

// $x = ['蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '施', '张'];
// $y = ['赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚'];

// function combineArray($arr1, $arr2)
// {
//     $result = array();

//     foreach ($arr1 as $item1) {
//         foreach ($arr2 as $item2) {
//             $result[] = $item1 . $item2;
//         }
//     }

//     return $result;
// }

$servername = "localhost";
$username = "root";
$password = "root";

// 创建连接
$conn = mysqli_connect($servername, $username, $password, 'test');

// 检测连接
if (!$conn) {
    exit("Connection failed: " . mysqli_connect_error());
}

// $data = combineArray($x, $y);
// foreach ($data as $k => $v) {
//     $age = (int) $k + 10;
//     $home = $v . '村';
//     $city = '杭州';
//     $address = '杭州滨江';
//     $sql = "INSERT INTO `user`(`name`,`age`,`home`,`city`,`address`) VALUE('{$v}','{$age}','{$home}','{$city}','{$address}')";
//     $conn->query($sql);
// }

// exit;
$data = $_POST;
if ($data) {
    $action = $_POST['action'];
    $page = $_POST['page'] ?? 1;
    $page_size = 10;
    $limit = ($page - 1) * $page_size;

    if ($action == 'list') {
        $where = 1;
        $result = $conn->query("select * from user where '{$where}' limit $limit,$page_size");
        while ($data[] = $result->fetch_assoc()) { }
        $total = $conn->query("select count(*) as num from user where '{$where}'")->fetch_assoc()['num'];

        $data = array_values($data);
        foreach ($data as $key => $v) {
            if (!is_array($v)) {
                unset($data[$key]);
            }
        }
        
        ajaxs(200, 'success', [
            'total' => (int)$total,
            'data' => array_values($data)
        ]);
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
