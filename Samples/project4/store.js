  if(document.readyState == 'loading'){
      document.addEventListener('DOMContentLoaded',ready)
  } else{
      ready()
  }

 function ready(){
   var removeButton=document.getElementsByClassName('btn-danger')
   console.log(removeButton);
   for(var i=0;i< removeButton.length;i++){
       var btn=removeButton[i]
       btn.addEventListener('click',removeCart)
          
   }
    
   var quantityInputs=document.getElementsByClassName('cart-quantity-input')
      for (var i = 0; i < quantityInputs.length;i++){
      var input=quantityInputs[i]
      input.addEventListener('change',quantityChanged)

      }


      var addCartButton=document.getElementsByClassName('shop-item-btn')
      for(var i = 0;i < addCartButton.length;i++){
          var btn = addCartButton[i]
          btn.addEventListener('click',addCart);
        }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click',purchaseClicked)
 }

//ready function end


//purchase function
  
function purchaseClicked(){
    alert('thanks for your purchase');
    var cartItems=document.getElementsByClassName('cart-items')[0]
    while(cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

//remove element in cart function
 function removeCart(event){
    var btnclick=event.target
    btnclick.parentElement.parentElement.remove()

    updateCartTotal()
 }

 //quantity increase function
 function quantityChanged(event){
       var input=event.target
       if(isNaN(input.value) || input.value <= 0 ){
           input.value=1
       }

       updateCartTotal()
 }

  function addCart(event){
       
      var button=event.target
      var shopItem=button.parentElement.parentElement
      var title=shopItem.getElementsByClassName('shop-item-title')[0].innerText
      var price=shopItem.getElementsByClassName('shop-item-price')[0].innerText
      var imgSrc=shopItem.getElementsByClassName('shop-item-image')[0].src
       console.log(title,price,imgSrc);
      addItemToCart(title,price,imgSrc)
      updateCartTotal()
  }

  //adding items to cart function

  function addItemToCart(title,price,imgSrc){
      var cartRow=document.createElement('div')
      cartRow.classList.add('cart-row')
      var cartItems=document.getElementsByClassName('cart-items')[0]
     var cartItemNames=cartItems.getElementsByClassName('cart-item-title')
       for(var i=0; i< cartItemNames.length;i++){
           if(cartItemNames[i].innerText == title){
               alert('this item is already added to cart ')
               return
           }
       }

     var cartRowContent=`
     <div class="cart-item cart-column">
     <img class="cart-item-image" src="${imgSrc}" width="50" height="50">
     <span class="cart-item-title">${title}</span>
 </div>
 <span class="cart-price cart-column">${price}</span>
 <div class="cart-quantity cart-column">
     <input class="cart-quantity-input" type="number" value="1">
     <button class="btn btn-danger" type="button">REMOVE</button>
 </div>
     `
     cartRow.innerHTML=cartRowContent
      cartItems.append(cartRow)
      cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',removeCart)
      cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('click',quantityChanged)
  }
 
 //total update
   function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseInt(priceElement.innerText.replace('$',''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$'+ total
}


 
 
 
  