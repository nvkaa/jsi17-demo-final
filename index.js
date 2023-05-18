import {foodItem} from './fooditem.js'

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
import { getDatabase, ref, child, get, set } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyAG-gEDvJj520TpqbOB50Wa9XKftb88O3g",
    authDomain: "nvk-jsi17.firebaseapp.com",
    databaseURL: "https://nvk-jsi17-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "nvk-jsi17",
    storageBucket: "nvk-jsi17.appspot.com",
    messagingSenderId: "924581048195",
    appId: "1:924581048195:web:79be1eae1e3f823f7bd0b6",
    measurementId: "G-NMSEQ23TKQ"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

  

// function writeOrders(orderNumber) {
  
//   set(ref(db, 'orders/' + orderNumber), {
//     a: '1'
//   });
// }

console.log(foodItem);

function displayItems(){
    var biryani= document.getElementById('biryani');
    var paneer=  document.getElementById('paneer');;
    var chicken=  document.getElementById('chicken');
    var vegetable=  document.getElementById('vegetable');
    var chinese=  document.getElementById('chinese');
    var southIndian=  document.getElementById('south-indian');

    

    const biryaniData= foodItem.filter((item)=>item.category=='biryani');
    const chickenData= foodItem.filter((item)=>item.category=='chicken');
    const PaneerData= foodItem.filter((item)=>item.category=='paneer');
    const vegetableData= foodItem.filter((item)=>item.category=='vegetable');
    const chineseData= foodItem.filter((item)=>item.category=='chinese');
    const southData= foodItem.filter((item)=>item.category=='south indian');

    biryaniData.map(item=>{
        
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa-regular fa-heart add-to-cart');
        heart.setAttribute('id',item.id)

        var wish = document.createElement('i');
        wish.setAttribute('class','fa-regular fa-star add-to-wish');
        wish.setAttribute('id','wish');
        var wt = document.createElement('span');
        wt.setAttribute('class','atw');
        wt.innerText= 'Add to wishlist';

        wish.appendChild(wt)


        cardTop.appendChild(star);
        // cardTop.appendChild(wish);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        itemCard.appendChild(wish);

        biryani.appendChild(itemCard);
        
    })


    chickenData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa-regular fa-heart add-to-cart');
        heart.setAttribute('id',item.id)

        var wish = document.createElement('i');
        wish.setAttribute('class','fa-regular fa-star add-to-wish');
        wish.setAttribute('id','wish');
var wt = document.createElement('span');
        wt.setAttribute('class','atw');
        wt.innerText= 'Add to wishlist';

        wish.appendChild(wt)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        itemCard.appendChild(wish);
        
        chicken.appendChild(itemCard)

    })

    PaneerData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa-regular fa-heart add-to-cart');
        heart.setAttribute('id',item.id)

        var wish = document.createElement('i');
        wish.setAttribute('class','fa-regular fa-star add-to-wish');
        wish.setAttribute('id','wish');
var wt = document.createElement('span');
        wt.setAttribute('class','atw');
        wt.innerText= 'Add to wishlist';

        wish.appendChild(wt)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        itemCard.appendChild(wish);
        
        paneer.appendChild(itemCard)

    })

    vegetableData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa-regular fa-heart add-to-cart');
        heart.setAttribute('id',item.id)

        var wish = document.createElement('i');
        wish.setAttribute('class','fa-regular fa-star add-to-wish');
        wish.setAttribute('id','wish');
var wt = document.createElement('span');
        wt.setAttribute('class','atw');
        wt.innerText= 'Add to wishlist';

        wish.appendChild(wt)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        itemCard.appendChild(wish);

        
        vegetable.appendChild(itemCard)
    
    })

    chineseData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa-regular fa-heart add-to-cart');
        heart.setAttribute('id',item.id)

        var wish = document.createElement('i');
        wish.setAttribute('class','fa-regular fa-star add-to-wish');
        wish.setAttribute('id','wish');
var wt = document.createElement('span');
        wt.setAttribute('class','atw');
        wt.innerText= 'Add to wishlist';

        wish.appendChild(wt)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        itemCard.appendChild(wish);

        
        chinese.appendChild(itemCard)
        
    })

    southData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa-regular fa-heart add-to-cart');
        heart.setAttribute('id',item.id)

        var wish = document.createElement('i');
        wish.setAttribute('class','fa-regular fa-star add-to-wish');
        wish.setAttribute('id','wish');
var wt = document.createElement('span');
        wt.setAttribute('class','atw');
        wt.innerText= 'Add to wishlist';

        wish.appendChild(wt)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        itemCard.appendChild(wish);

        southIndian.appendChild(itemCard)

    })
}
displayItems();




const vegData= [...new Map(foodItem.map(item=> [item['category'],item])).values()];
// console.log(vegData);

function selectTaste(){
    var categoryList= document.getElementById('category-list');

    vegData.map(item=>{
        // console.log(item)
        var listCard= document.createElement('div');
        listCard.setAttribute('class','list-card');
    
        var listImg= document.createElement('img');
        listImg.src= item.img;
    
        var listName= document.createElement('a');
        listName.setAttribute('class','list-name');
        listName.innerText= item.category;
        listName.setAttribute('href','#'+item.category)
    
        listCard.appendChild(listImg);
        listCard.appendChild(listName);

        var cloneListCard= listCard.cloneNode(true);
        categoryList.appendChild(listCard);
        document.querySelector('.category-header').appendChild(cloneListCard)
    })
}
selectTaste();


document.querySelectorAll('.add-to-cart').forEach(item=>{
    item.addEventListener('click', addToCart)
})

var cartData= [];
function addToCart(){
    
    var itemToAdd= this.parentNode.nextSibling.nextSibling.innerText;
    // console.log(itemToAdd);
    var itemObj= foodItem.find( element => element.name==itemToAdd );
    // console.log(itemObj);
    
    var index= cartData.indexOf(itemObj);
    // console.log(index);
    if(index=== -1){
        this.classList.remove('fa-regular');
        this.classList.add('fa-solid');
        cartData= [...cartData,itemObj];
        console.log(cartData);
        localStorage.setItem("cart-data", JSON.stringify(cartData))
    }
    else if (index > -1){
        // console.log(index);
        document.getElementById(itemObj.id).classList.add('fa-regular');
        document.getElementById(itemObj.id).classList.remove('fa-solid');
        // console.log(cartData.length);
        cartData.splice(index, 1);
        console.log(cartData);
        localStorage.setItem("cart-data", JSON.stringify(cartData))
        
        
        // alert("Already added to cart");
    }
    
    document.getElementById('cart-plus').innerText=
    ' ' + cartData.length + ' Items';
    document.getElementById('m-cart-plus').innerText=
    ' ' + cartData.length;
    totalAmount();
    cartItems();
    
}


function cartItems(){
    var tableBody=  document.getElementById('table-body');
    tableBody.innerHTML= '';

    cartData.map(item=> {
        var tableRow= document.createElement('tr');
        
        var rowData1= document.createElement('td');
        var img= document.createElement('img');
        img.src= item.img;
        rowData1.appendChild(img);
    
        var rowData2= document.createElement('td');
        rowData2.innerText= item.name;
        
        var rowData3= document.createElement('td');
        var btn1= document.createElement('button');
        btn1.setAttribute('class','decrease-item');
        btn1.innerText= '-';
        var span= document.createElement('span');
        span.innerText= item.quantity;
        var btn2= document.createElement('button');
        btn2.setAttribute('class','increase-item');
        btn2.innerText= '+';
        
        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);
    
        var rowData4= document.createElement('td');
        rowData4.innerText= item.price;
    
        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);
    
        tableBody.appendChild(tableRow);
    })
    document.querySelectorAll('.increase-item').forEach(item=>{
        item.addEventListener('click',incrementItem)
    })

    document.querySelectorAll('.decrease-item').forEach(item=>{
        item.addEventListener('click',decrementItem)
    })
}

function checkout(){
    alert('Order Success! Pay your order at the store')
    window.location.reload()
}

var wishData = [];
function addToWish(){
    //console.log(this);
    var itemToAdd= this.previousSibling.previousSibling.innerText;
    // console.log(itemToAdd);
    var itemObj= foodItem.find(element=>element.name==itemToAdd);
    // console.log(wishData);
    var index= wishData.indexOf(itemObj);
    if(index=== -1){
        this.classList.remove('fa-regular');
        this.classList.add('fa-solid');
        wishData= [...wishData,itemObj];
        console.log(wishData);
        // 
    }
    else if (index > -1){
        // console.log(index);
        this.classList.add('fa-regular');
        this.classList.remove('fa-solid');
        // console.log(cartData.length);
        wishData.splice(index, 1);
        // console.log(wishData);
        
        
        
        // alert("Already added to cart");
    }
    // document.getElementById('wish-plus').innerText=
    // ' ' + wishData.length + ' Items';
    // document.getElementById('m-cart-plus').innerText=
    // ' ' + wishData.length;
    console.log(wishData);
    // totalAmount();
    // cartItems();
    wishItems();
}

function wishItems(){
    // alert('a')
    var tableBody=  document.getElementById('t-body');
    // console.log(tableBody.innerHTML);
    tableBody.innerHTML= '';

    wishData.map(item=> {
        var tableRow= document.createElement('tr');
        
        var rowData1= document.createElement('td');
        var img= document.createElement('img');
        img.src= item.img;
        rowData1.appendChild(img);
    
        var rowData2= document.createElement('td');
        rowData2.innerText= item.name;
        
        // var rowData3= document.createElement('td');
        // var btn1= document.createElement('button');
        // btn1.setAttribute('class','decrease-item');
        // btn1.innerText= '-';
        // var span= document.createElement('span');
        // span.innerText= item.quantity;
        // var btn2= document.createElement('button');
        // btn2.setAttribute('class','increase-item');
        // btn2.innerText= '+';
        
        // rowData3.appendChild(btn1);
        // rowData3.appendChild(span);
        // rowData3.appendChild(btn2);
    
        var rowData3= document.createElement('td');
        rowData3.innerText= item.price;
    
        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        // tableRow.appendChild(rowData4);
    
        tableBody.appendChild(tableRow);
    })
    // document.querySelectorAll('.increase-item').forEach(item=>{
    //     item.addEventListener('click',incrementItem)
    // })

    // document.querySelectorAll('.decrease-item').forEach(item=>{
    //     item.addEventListener('click',decrementItem)
    // })
}


function incrementItem(){
    let itemToInc= this.parentNode.previousSibling.innerText;
    console.log(itemToInc)
    var incObj= cartData.find(element=>element.name==itemToInc);
    incObj.quantity+=1;
    
    currPrice= (incObj.price*incObj.quantity - incObj.price*(incObj.quantity-1))/(incObj.quantity-1);
    incObj.price= currPrice*incObj.quantity;
    totalAmount()
    cartItems();
}

var currPrice= 0;
function decrementItem(){
    let itemToInc= this.parentNode.previousSibling.innerText;
    let decObj= cartData.find(element=>element.name==itemToInc);
    let ind= cartData.indexOf(decObj);
    if(decObj.quantity >1){
        currPrice= (decObj.price*decObj.quantity - decObj.price*(decObj.quantity-1))/(decObj.quantity);
        decObj.quantity-= 1;
        decObj.price= currPrice*decObj.quantity;
    }
    else{
        document.getElementById(decObj.id).classList.remove('fa-solid')
        document.getElementById(decObj.id).classList.add('fa-regular')
        cartData.splice(ind,1);
        document.getElementById('cart-plus').innerText= ' ' + cartData.length + ' Items';
        document.getElementById('m-cart-plus').innerText= ' ' + cartData.length;
        if(cartData.length < 1 && flag){
            document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('category-list').classList.toggle('food-items');
            document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle')
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            document.getElementById('category-header').classList.toggle('toggle-category');
            document.getElementById('checkout').classList.toggle('cart-toggle');
            flag= true;
            alert("Currently no item in cart!");
            console.log(flag)
        }
    }
    totalAmount()
    cartItems()
}

function totalAmount(){
    var sum=0;
    cartData.map(item=>{
        sum+= item.price;
    })
    document.getElementById('total-item').innerText= 'Total Item : ' + cartData.length;
    document.getElementById('total-price').innerText= 'Total Price : $ ' + sum;
    document.getElementById('m-total-amount').innerText= 'Total Price : $ ' + sum;
}

document.getElementById('cart-plus').addEventListener('click',cartToggle);
document.getElementById('m-cart-plus').addEventListener('click',cartToggle);

document.getElementById('dispWish').addEventListener('click', wishToggle);


var display = false;
function cartToggle(){
    if(cartData.length > 0){
        document.getElementById('food-items').classList.toggle('food-items');
        document.getElementById('category-list').classList.toggle('food-items');
        document.getElementById('category-header').classList.toggle('toggle-category');
        document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle')
        document.getElementById('cart-page').classList.toggle('cart-toggle');
        document.getElementById('checkout').classList.toggle('cart-toggle');

        // document.getElementById('food-items').display='none'
        // document.getElementById('category-list').classList.toggle('food-items');
        // document.getElementById('category-header').classList.toggle('toggle-category');
        // document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle')
        // document.getElementById('cart-page').classList.toggle('cart-toggle');
        // document.getElementById('checkout').classList.toggle('cart-toggle');

        display = !display;
        console.log(display)
    }
    else{
        alert("Currently no item in cart!");
    }
    console.log(display);
}

console.log(wishData);
function wishToggle(){
    // if(display == false){
        document.getElementById('food-items').classList.toggle('food-items');
        document.getElementById('category-list').classList.toggle('food-items');
        document.getElementById('category-header').classList.toggle('toggle-category');
        // document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle')
        document.getElementById('wish-page').classList.toggle('wish-toggle');
        document.getElementById('checkout').classList.toggle('wish-toggle');
        display = !display;
        console.log(display)
    // }
    // else{
    //     document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle')
    //     document.getElementById('cart-page').classList.toggle('cart-toggle');
    //     document.getElementById('wish-page').classList.toggle('wish-toggle');
    //     document.getElementById('checkout').classList.toggle('cart-toggle');
    // }
    
}





window.onresize= window.onload= function(){
    var size= window.screen.width;
    console.log(size)
    if(size<800){
        var cloneFoodItems= document.getElementById('food-items').cloneNode(true);
        var cloneCartPage= document.getElementById('cart-page').cloneNode(true);
        document.getElementById('food-items').remove();
        document.getElementById('cart-page').remove();
        document.getElementById('category-header').after(cloneFoodItems);
        document.getElementById('food-items').after(cloneCartPage);
        addEvents()
    }
    if(size>800){
        var cloneFoodItems= document.getElementById('food-items').cloneNode(true);
        document.getElementById('food-items').remove();
        document.getElementById('header').after(cloneFoodItems);

        var cloneCartPage= document.getElementById('cart-page').cloneNode(true);
        document.getElementById('cart-page').remove();
        document.getElementById('food-items').after(cloneCartPage);
        addEvents()
    }
}

function addEvents(){
    document.querySelectorAll('.add-to-cart').forEach(item=>{
        item.addEventListener('click',addToCart)
    });
    document.querySelectorAll('.increase-item').forEach(item=>{
        item.addEventListener('click',incrementItem)
    })

    document.querySelectorAll('.decrease-item').forEach(item=>{
        item.addEventListener('click',decrementItem)
    })

    document.querySelectorAll('.add-to-wish').forEach(item=>{
        item.addEventListener('click',addToWish)
    })
    // document.querySelectorAll('#dispWish').forEach(item=>{
    //     item.addEventListener('click',addToWish)
    // })

    document.querySelectorAll('.checkout').forEach(item=>{
        item.addEventListener('click',checkout)
    })
}


document.getElementById('add-address').addEventListener('click',addAddress);

document.getElementById('m-add-address').addEventListener('click',addAddress);



function addAddress(){
    var address= prompt('Enter your address');
    
    console.log(window.address);
    if(address){
        document.getElementById('add-address').innerText= ' ' + address;
        // localStorage.setItem('address', JSON.parse(address))
    }
    else{
        alert("Address not added")
    }
}

document.getElementById("order-rdr").addEventListener("click", () => {
    window.location='./order.html'
})

// document.getElementById("cart-plus").addEventListener("click", () => {
//     window.location='./order.html'
// })