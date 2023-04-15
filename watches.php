

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="watches.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap" rel="stylesheet">
    <title>Watches</title>
</head>
<body>
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
    
    $name="SELECT * FROM `product` ";
                 $data1 = mysqli_query($con,$name);
                 
             
              
             
    
?>
<div class="head">
            <div class="menu">
                <span><a href="homepage.html">Home</a></span>
                <span id="username" style=" border: 2px solid gray; border-radius: 5px;"><a href="#"></a></span> 
                <span><button id="logOutbtn" onclick="Outfunc()">Log Out</button></span>  
              </div>
               <br>
               <br>
            <div class="intext">
              <h1 id="heading">WATCHES</h1>
              <div id="innertext">
                <button type="button" onclick="scroll()">Checkout our new Watch Collection ➡️</button>
              </div>
            </div>
        </div>
        
            <div class="searchContainer">
              <a href="cart.html">  
                <div id="cart">
                  
                  <p>CART</p>
                  <h3 id="cartNum">0</h3>
                </div>
              </a>
                <div>
                  <form action="homepage.html" style="display: flex; padding-top: 40px;">
                  <input type="search" name="search" placeholder="Search">
                  <button>Search</button>
                </form>
              </div>
                
              </div>
        
              <div class="con_contain" id="container">
                <?php
                while($result1 = mysqli_fetch_assoc($data1)) {    
                  $na = $result1["pname"];
                  $desc = $result1["pdesc"];
                  $pric = $result1["price"];
                  $i = 1;
                
                  ?>
                  <div class="cards">
                    <div id="imgwatch<?php echo $i ?>">
                      <img src="https://m.media-amazon.com/images/I/71aMn5xDb+L._UL1500_.jpg" style="width: 400px;height: 328px;border-radius: 25px;">
                    </div>
                    <h1 id="watchDec<?php echo $i ?>"><?php echo $na ?></h1>
                    <p><?php echo $desc ?></p>
                    <p id="price6">Rs <?php echo $pric ?></p>
                    <div id="btn">
                      <button id="btn1" onclick="addToCart('<?php echo $na ?>', '<?php echo $desc ?>', '<?php echo $pric ?>')" >Add To Cart</button>
                    </div>
                  </div>
                  <?php
                  $i++;
                }
            ?>
             
            </div>
              <script src="script.js"></script>
              <script src="watches.js"></script>
              
</body>
</html>
