<?php
     header("Content-type:text/html;charset=utf-8");
    //1、接收前端的数据

    $username = $_POST['username'];
    $userpass = $_POST['userpass'];

    //2、处理
    $conn = mysql_connect("localhost","root","root");

    if(!$conn){
        echo("数据库出错".mysql_error());
    }else{
        //2)、选择库（选择目的地）
        mysql_select_db("thermos",$conn);

        //3)、执行SQL语句（数据传输）
        //3.1)
        $sqlstr="select * from yonghu where username='$username' and userpass='$userpass' ";//查询该用户名在数据库中有没有。 
        $result = mysql_query($sqlstr,$conn);
        $rows = mysql_num_rows($result);//获得结果的行数
        if($rows>0){
            //4)、关闭数据库
            mysql_close($conn);
            echo "1";//登录成功
        }else{
            echo "0";//登录失败
        }
    }
?>