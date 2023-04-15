let countEl=document.getElementById("cartNum")
let nameEl=document.getElementById("username")
let logout =document.getElementById("logOutbtn")
let cart =0
let text= localStorage.getItem('username')
console.log(text)
nameEl.textContent="Hi!  "+text 
cart=Number(localStorage.getItem('cart'));
countEl.textContent=cart

function Outfunc()
{
    window.open('Login.html','_self');
}
 function increment()
{
    cart+=1
    countEl.textContent=cart
    alert("Added to Cart")
    localStorage.setItem('cart',cart);
}