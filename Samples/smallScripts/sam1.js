$(document).ready(function(){
   
   
    (function(){
        const cartInfo = document.getElementById('cart-info');
        const cart=document.getElementById('cart')
    
        cartInfo.addEventListener('click',function(){
            cart.classList.toggle('show-cart')
        }); 
    })();
});


if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready)
} else{
    ready()
}

function ready(){


    var removeBtn=document.getElementsByClassName('delete')
    console.log(removeBtn);
    for(var i=0;i< removeBtn.length;i++){
        var btn=removeBtn[i];
        btn.addEventListener('click',removeItem)
    }

var quantityInput=document.getElementsByClassName('quantity-input')
for(var i=0; i<quantityInput.length;i++){
    var input=quantityInput[i]
    input.addEventListener('change',quantityChanged)
}

var addBtn=document.getElementsByClassName('add-to-cart')
for(var i=0; i< addBtn.length;i++){
    var btn=addBtn[i]
    btn.addEventListener('click',addCart)
}
  
}
//end ready function

//fuctions.....
  
function removeItem(event){

    var btnClick=event.target
    btnClick.parentElement.parentElement. remove()

    updateCartTotal()
}

function quantityChanged(event){
    var input=event.target
    if(input.value == isNaN || input.value <= 0){
        input.value=1

    }
    updateCartTotal()

}

function addCart(event){

    var btn=event.target
    var Item=btn.parentElement.parentElement
    var title=Item.getElementsByClassName('card-header')[0].innerText
    var price=Item.getElementsByClassName('card-price')[0].innerText
    var imgSrc=Item.getElementsByClassName('store-img')[0].src
     console.log(title,price,imgSrc)
     addItemToCart(title,price,imgSrc)
     updateCartTotal()

}

function addItemToCart(title,price,imgSrc){
    var cartRow=document.createElement('tr')
    cartRow.classList.add('cart-row')
    var cartItems=document.getElementsByClassName('cart-items')[0]
    var cartNames=cartItems.getElementsByClassName('cart-title')
    for(var i=0; i < cartNames.length; i++){
        if(cartNames[i].innerText == title){
            alert('this item is already added')
            return
        }
    }

    var cartRowContent=`
          
        <td><img src="${imgSrc}" width="50px" height="50px"></td>
        <td><span class="cart-title">${title} </span> </td>
         <td> <span class="price">${price}</span> </td>
         <td >
        <input type="number" value="1" class="quantity-input">
        </td>
         <td class="delete"><i class="fas fa-trash" ></i></td>
         
    
    `
    cartRow.innerHTML=cartRowContent
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('delete')[0].addEventListener('click',removeItem)
    cartRow.getElementsByClassName('quantity-input')[0].addEventListener('click',quantityChanged)

   }


function updateCartTotal(){

    var cartContainer=document.getElementsByClassName('cart-items')[0]
    var cartRows=cartContainer.getElementsByClassName('cart-row')
    var total=0;
    for(var i=0;i<cartRows.length;i++){
        cartRow=cartRows[i];
        var priceElement=cartRow.getElementsByClassName('price')[0]
        var quantityElement=cartRow.getElementsByClassName('quantity-input')[0]
        var price=parseInt(priceElement.innerText.replace('$',''))
        var quantity=quantityElement.value
         total=total+(price*quantity);

    }
    document.getElementsByClassName('cart-total')[0].innerText='$'+ total;
}