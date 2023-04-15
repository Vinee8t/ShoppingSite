
let inn = [];
let pricel = [];
let subtotal = 0;

if (localStorage.getItem('subw') != null) {
  subtotal = Number(localStorage.getItem('subg'));
  console.log("subtotal is: " + subtotal);
}

let newname = [];
newname = JSON.parse(localStorage.getItem('nameg'));
let newprice = [];
newprice = JSON.parse(localStorage.getItem('priceg'));

if (newname != null) {
  inn.push(newname);
}
if (newprice != null) {
  pricel.push(newprice);
}

function addToCart(name, desc, price) {
  var names = {
    "name": name
  };
  var descr = {
    "description": desc
  };
  var prices = {
    "price": Number(price)
  };
  
  inn.push(name);
  pricel.push(Number(prices.price));
  subtotal += Number(prices.price);
  localStorage.setItem('nameg', JSON.stringify(inn));
  localStorage.setItem('priceg', JSON.stringify(pricel));
  localStorage.setItem('subg', subtotal);
  increment();
  alert(name + " has been added to your cart!");
  
}