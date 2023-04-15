<?php

    $server="localhost";
    $username="root";
    $password="";
    $db="ecommerce";
    $con=mysqli_connect($server,$username,$password,$db);
    if(!$con)
    {
        die("connection to this database failed due to ".mysqli_connect_errno());
    }

    $phone=$_POST['number'];
    $password1=$_POST['password'];
    
   
    $sql="SELECT * From signinfo where 
    phone='$phone';";
     $data = mysqli_query($con,$sql);
     $total = mysqli_num_rows($data);   
     
     if($total!=0)
     {
        
         while($result= mysqli_fetch_assoc($data))
         {
         if ($result['phone']==$phone)
         {
             if($result['password']==$password1)
             {
                $name="SELECT * From signinfo where 
    phone='$phone';";
                 $data1 = mysqli_query($con,$name);
                 $result1= mysqli_fetch_assoc($data1);
             
              $na= $result1["Name"];
                    
                      
                    
                  echo "<script>localStorage.setItem('username', '$na' );</script>";
                   
                  echo"  <meta http-equiv = 'refresh' content = '0; url = http://localhost/Project/SOHO/homepage.html'>";
                    
             }
             else
             {
                 echo "<script>alert('Inavlid password')</script>";
              echo "<meta http-equiv = 'refresh' content = '1; url = http://localhost/Project/SOHO/Login.html'>";
             }
         }
         else
         {
             echo "<script>alert('Inavlid login credentials')</script>";
         }
         }
    }
?>