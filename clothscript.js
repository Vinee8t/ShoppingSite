const cloth1 =document.getElementById("clothDec1");
const btn1 =document.getElementById("btn1");
const cloth2 =document.getElementById("clothDec2");
const btn2 =document.getElementById("btn2");
const cloth3 =document.getElementById("clothDec3");
const btn3 =document.getElementById("btn3");
const cloth4 =document.getElementById("clothDec4");
const btn4 =document.getElementById("btn4");
const cloth5 =document.getElementById("clothDec5");
const btn5 =document.getElementById("btn5");
const cloth6 =document.getElementById("clothDec6");
const btn6 =document.getElementById("btn6");

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

let newname =[]
newname = JSON.parse(localStorage.getItem('name'));
let newprice =[]
newprice=JSON.parse(localStorage.getItem('price'));

let inn=[];
let subtotal=0
if(localStorage.getItem('subtotal')!=null)
{
    subtotal=Number(localStorage.getItem('subtotal'));
    console.log("subtotal is : "+subtotal)
}
let pricel=[]

if(newname!=null)
{
    inn.push(newname)
}
if(newprice!=null)
{
    pricel.push(newprice)
}


btn1.addEventListener("click",function(){
    inn.push(cloth1.innerText) 
    let price =1439;
    pricel.push(price)
    subtotal+=price;
    console.log(inn);
    setting();
})
btn2.addEventListener("click",function(){
    inn.push(cloth2.innerText)
    let price =3862;
    pricel.push(price)
    subtotal+=price;
    console.log(inn);
    setting();
})
btn3.addEventListener("click",function(){
    inn.push(cloth3.innerText)
    let price =459;
    pricel.push(price)
    subtotal+=price;
    console.log(inn);
    setting();
})
btn4.addEventListener("click",function(){
    inn.push(cloth4.innerText)
    let price =459;
    pricel.push(price)
    subtotal+=price;
    console.log(inn);
    setting();
})
btn5.addEventListener("click",function(){
    inn.push(cloth5.innerText)
    let price =2390;
    pricel.push(price)
    subtotal+=price;
    console.log(inn);
    setting();
})
btn6.addEventListener("click",function(){
    inn.push(cloth6.innerText)
    let price =1199;
    pricel.push(price)
    subtotal+=price;
    console.log(inn);
    setting();
})


function setting()
{
 localStorage.setItem('name',JSON.stringify(inn));
 localStorage.setItem('price',JSON.stringify(pricel));
 localStorage.removeItem('subtotal');
 localStorage.setItem('subtotal',subtotal);
 console.log(subtotal)
}

