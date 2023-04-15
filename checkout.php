<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkout</title>
</head>
<body>
    <h1>Fill Your Details</h1>
    <form action="SignUp.php" method="post">
                <input type="text" name="name" placeholder="Name" id="name"><br>
                <input type="number" name="age" placeholder="Age" id="age"><br>
                
                <input type="tel" name="number" placeholder="Number" id="number"><br>
                <input type="email" name="email" placeholder="Email" id="email"><br>
                
                <input type="checkbox" name="confirm" id="confirmEl" required >Confirm Information<br>
                <button id="signBtn">Pay</button>
    
</body>
</html>


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