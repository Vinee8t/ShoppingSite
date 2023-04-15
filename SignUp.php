<?php
$insert =false;
if(isset($_POST['name']))
{
    $server="localhost";
    $username="root";
    $password="";
    $db="ecommerce";
    $con=mysqli_connect($server,$username,$password,$db);
    if(!$con)
    {
        die("connection to this database failed due to ".mysqli_connect_errno());
    }

    $name=$_POST['name'];
    $age=$_POST['age'];
    $gender=$_POST['gender'];
    $phone=$_POST['number'];
    $email=$_POST['email'];
    $password1=$_POST['password'];

    $sql="INSERT INTO signinfo 
    ( `Name`,`age`, `gender`, `phone`, `email`,`password`, `Date`)
     VALUES ('$name', '$age', '$gender', '$phone', '$email','$password1',
      current_timestamp());";
      if($con->query($sql)==true)
      {
        $insert=true;

        echo "<meta http-equiv = 'refresh' content = '0; url = http://localhost/Project/SOHO/login.html'>";
      }
      else{
        echo "ERROR : $sql <br> $con->error";
      }
      $con->close();
}
?>