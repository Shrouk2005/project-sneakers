let menu = document.querySelector (".menu");
let close = document.querySelector(".close");
let navlinks = document.querySelector(".nav-links");
let next = document.querySelector(".next");
let before = document.querySelector(".before");
let mainimg = document.querySelector(".main-img :nth-child(3)");
let buttons = document.querySelectorAll(".addtocart .left img");
let spanCount = document.querySelector(".addtocart .left span");
let buttonAdd =  document.querySelector(".addtocart .right button");
let numCart = document.querySelector(".right-nav span");
let checkout = document.querySelector(".checkout");
let cart = document.querySelector(".right-nav :nth-child(2)");
let empty = document.querySelector(".empty");
let productCart = document.querySelector(".product-cart");
let checkoutbutton = document.getElementById("checkoutbutton");
let numpro = document.querySelector(".numpro");
let total = document.querySelector(".total");
let del = document.querySelector(".delete");
let imags =document.querySelectorAll(".imags img");

menu.onclick = ()=>{
navlinks.style.left = "0"
}
close.onclick = ()=>{
navlinks.style.left = "-60%"
}
let images = ["image-product-1.jpg","image-product-2.jpg","image-product-3.jpg","image-product-1.jpg"]
let numimg =0;
next.onclick =()=>{
if(numimg < 3){
    numimg++;
 mainimg.src =`images/${images[numimg]}`
 console.log(numimg)
}
}
before.onclick = ()=>{
    if(numimg > 0){
        numimg--;
        mainimg.src =`images/${images[numimg]}`
        console.log(numimg)
    }
}
for(let i =0; i<imags.length; i++){
    imags[i].onclick = ()=>{
        mainimg.src = `images/${images[i]}`
    }
}
let count = 0;
buttons[1].onclick = ()=>{
 if(count < 8){
 count++;
 spanCount.innerHTML = count;
}
}
buttons[0].onclick = ()=>{
    if(count > 0){
        count--;
     spanCount.innerHTML = count;
    }
}
 buttonAdd.onclick = ()=>{
    if(count > 0){
    numCart.style.display = 'block'
   numCart.innerHTML = count
    }else{
        numCart.style.display = 'none'
    }
    showData()
}
cart.onclick = ()=>{
    checkout.classList.toggle("checkout-toogle");
    showData();
}
   function showData(){
    if(count> 0){
   empty.style.display = 'none'
   productCart.style.display = 'flex';
   checkoutbutton.style.display='block';
   numpro.innerHTML = count;
   total .innerHTML = `$${count * 125}.00`;
   del.onclick = ()=>{
    count--;
    spanCount.innerHTML = count;
    numCart.innerHTML = count;
    if(count == 0){
        numCart.style.display = 'none'
    }
    showData();
   }
}
else{
    empty.style.display = 'block'
    productCart.style.display = 'none'
    checkoutbutton.style.display='none';
   }
}
