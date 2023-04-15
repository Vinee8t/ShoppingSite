const content =document.getElementById("contents")
const content1 =document.getElementById("contents1")
const checkbtn= document.getElementById("check")


let name11=[];let price=[];let sub=0;
let nameshoes=[];let priceshoes=[];let subs=0;
let nwatch=[];let pwatch=[];let subwatch=0;
let subtotal=0


name11=JSON.parse(localStorage.getItem('name'));
price=JSON.parse(localStorage.getItem('price'));
subcloth=Number(localStorage.getItem('subtotal'));
console.log(subcloth)

nameshoes=JSON.parse(localStorage.getItem('nameshoe'));
priceshoes=JSON.parse(localStorage.getItem('priceshoe'));
subshoe=Number(localStorage.getItem('subtotals'));
console.log(subshoe)

nwatch=JSON.parse(localStorage.getItem('namew'));
pwatch=JSON.parse(localStorage.getItem('pricew'));
subwatch=Number(localStorage.getItem('subw'));

subtotal+=(subcloth+subshoe+subwatch)
localStorage.setItem('total',subtotal)

let nameItems =[]                                                                                             ;
let priceItems =[]
if(name11!=null)
{
for(let i =0;i<name11.length;i++)
{
nameItems.push(name11[i])
priceItems.push(price[i])
}
}
if(nameshoes!=null)
{
for(let i =0;i<nameshoes.length;i++)
{
nameItems.push(nameshoes[i])
priceItems.push(priceshoes[i])
}
}
if(nwatch!=null)
{
for(let i =0;i<nwatch.length;i++)
{
nameItems.push(nwatch[i])
priceItems.push(pwatch[i])
}
}
console.log(nameItems)
console.log(priceItems)

    for(let i=0;i<nameItems.length;i++)
    {
        content.innerHTML+=`
                    <div style="list-style-type:none;border:2px solid;border-radius:10px;padding:20px;
                    font-size:30px;display:flex;justify-content: space-between;margin:2px;background-color:rgb(140, 193, 231)">
                        <div >  ${nameItems[i]} </div>
                        <div > ₹ ${priceItems[i]} </div>
                    </div> 
                    `                
    }
    let subt=`<div style="font-size:28px; margin:20px;color:white;" align="right" >Subtotal : Rs ${subtotal}</div>`
     content.innerHTML+=subt;


function showOrderComplete() {
 const orderCompleteMsg = document.querySelector('.order-complete');
        orderCompleteMsg.classList.remove('hidden');
        setTimeout(function() {
            orderCompleteMsg.classList.add('hidden');
            
          }, 5000);
          orderCompleteMsg.addEventListener('animationend', function() {
            // Additional code to execute after the animation has finished
            runnew()
          }, { once: true });
        
      }
     
       
     
      function runnew()
      {
        localStorage.removeItem('name');
        localStorage.removeItem('subtotal');
        localStorage.removeItem('price');
        localStorage.removeItem('nameshoe');
        localStorage.removeItem('subtotals');
        localStorage.removeItem('priceshoe');
        localStorage.removeItem('namew');
        localStorage.removeItem('pricew');
        localStorage.removeItem('subw');
        localStorage.setItem('cart',0);
        setTimeout(function() {
            location.reload();
          }, 2000);
        
        
      }



/*
else if(nameshoes!=null)
{
    for(let i=0;i<nameshoes.length;i++)
    {
        content1.innerHTML+=`
        <div style="list-style-type:none;border:2px solid;border-radius:10px;padding:20px;
        font-size:30px;display:flex;justify-content: space-between;margin:2px;">
            <div style="color:white;">  ${nameshoes[i]} </div>
            <div style="color:white;"> ₹ ${priceshoes[i]} </div>
        </div> 
        `
    }
    let subt1=`<div style="font-size:28px; margin:20px;color:white;" align="right" >Subtotal : Rs ${subs}</div>`
    content.innerHTML+=subt1;
}

content.innerHTML+=shoeItems
content1.innerHTML+=nameItems

*/

