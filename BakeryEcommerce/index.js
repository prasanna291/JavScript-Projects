$(document).ready(function(){
//navbar button click function
  (function(){
    const cartInfo = document.getElementById('cart-info');
    const cart=document.getElementById('cart')

    cartInfo.addEventListener('click',function(){
        cart.classList.toggle('show-cart')
    }); 
})();

//cart icon click event 
(function(){
    const cartbtn = document.querySelectorAll('.store-item-icon');
    cartbtn.forEach(function(btn){
        btn.addEventListener('click',function(event){
     // console.log(event.target);

     if(event.target.parentElement.classList.contains('store-item-icon'))
     {
        let fullPath= event.target.parentElement.previousElementSibling.src;
        let pos =fullPath.indexOf('images') + 6;
       let partPath=fullPath.slice(pos);
         // console.log(partpath);

         const item={};
         item.images=`images${partPath}`;
         
         let name=event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
         item.name = name;

         let price=event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
          // console.log(price);
         //console.log(name);
         let finalprice=price.slice(1).trim();
         item.price=finalprice;
           //console.log(finalprice);
           //console.log(item);

       const cartItem = document.createElement('div');
       cartItem.classList.add(
           "cart-item",
           "d-flex",
           "justify-content-between",
           "text-capitalize",
           "my-3"
           );
         cartItem.innerHTML =` 
          <img src="${item.images}" 
          width="50px" height="50px"
           class="img-fluid rounded-circle"  
           id="item-img" alt="">
           <div class="cart-item-text">
     
             <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
             <span>$</span>
             <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
           </div>
           <a href="#" id='cart-item-remove' class="cart-item-remove">
             <i class="fas fa-trash"></i>
           </a>
         </div>`;

         //select cart

         const cart=document.getElementById('cart');
         const total=document.querySelector('.cart-total-container');

         cart.insertBefore(cartItem,total);
         alert('Item is added to cart');
       
        showTotals();

     }
        });
    });

    function showTotals(){
        const total=[];
        const items=document.querySelectorAll('.cart-item-price');
        items.forEach(function(item){
            total.push(parseInt(item.textContent));
        });
       // console.log(total);
       const totalMoney=total.reduce(function(total,item){
          total+=item;
          return total;
       },0);
       //console.log(totalMoney);
       document.getElementById('cart-total').textContent=totalMoney;
       document.getElementById('item-total').textContent=totalMoney;
       document.getElementById('item-count').textContent=total.length;

    }

})();

})