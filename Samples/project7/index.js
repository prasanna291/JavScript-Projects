$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});

//cart info 
$(document).ready(function(){
    function cart(){
        
        const cartInfo=document.getElementsByClassName('cart-info')
        const cart=document.getElementsByClassName('cart')
        cart.classList.toggle('show-cart')
    }
})
