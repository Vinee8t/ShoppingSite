const shoe1 =document.getElementById("shoeDec1");
const btn1s =document.getElementById("btn1");
const shoe2 =document.getElementById("shoeDec2");
const btn2s =document.getElementById("btn2");
const shoe3 =document.getElementById("shoeDec3");
const btn3s =document.getElementById("btn3");
const shoe4 =document.getElementById("shoeDec4");
const btn4s =document.getElementById("btn4");
const shoe5 =document.getElementById("shoeDec5");
const btn5s =document.getElementById("btn5");
const shoe6 =document.getElementById("shoeDec6");
const btn6s =document.getElementById("btn6");

let inn=[];
let subtotal=0
if(localStorage.getItem('subtotals')!=null)
{
    subtotal=Number(localStorage.getItem('subtotals'));
    console.log("subtotal is : "+subtotal)
}
let pricel=[]

let newname =[]
newname = JSON.parse(localStorage.getItem('nameshoe'));
let newprice =[]
newprice=JSON.parse(localStorage.getItem('priceshoe'));

if(newname!=null)
{
    inn.push(newname)
}
if(newprice!=null)
{
    pricel.push(newprice)
}


btn1s.addEventListener("click",function(){
    inn.push(shoe1.innerText) 
    let price =789;
    pricel.push(price)
    subtotal+=price;
    console.log(inn);
    setting();
})
btn2s.addEventListener("click",function(){
    inn.push(shoe2.innerText)
    let price =55250;
    pricel.push(price)
    subtotal+=price;
    console.log(inn);
    setting();
})
btn3s.addEventListener("click",function(){
    inn.push(shoe3.innerText)
    let price =3079;
    pricel.push(price)
    subtotal+=price;
    console.log(inn);
    setting();
})
btn4s.addEventListener("click",function(){
    inn.push(shoe4.innerText)
    let price =499;
    pricel.push(price)
    subtotal+=price;
    console.log(inn);
    setting();
})
btn5s.addEventListener("click",function(){
    inn.push(shoe5.innerText)
    let price =3020;
    pricel.push(price)
    subtotal+=price;
    console.log(inn);
    setting();
})
btn6s.addEventListener("click",function(){
    inn.push(shoe6.innerText)
    let price =41664;
    pricel.push(price)
    subtotal+=price;
    console.log(inn);
    setting();
})

function setting()
{
 localStorage.setItem('nameshoe',JSON.stringify(inn));
 localStorage.setItem('priceshoe',JSON.stringify(pricel));
 localStorage.removeItem('subtotals');
 localStorage.setItem('subtotals',subtotal);
}

