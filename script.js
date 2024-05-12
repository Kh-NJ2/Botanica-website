document.addEventListener('DOMContentLoaded', function() {
    var addbtn = document.getElementsByClassName('add-to-cart');
    var count = document.getElementById('cart-count');
    var nextbtn = document.getElementById("next");
    var slideIndex = 1;
    showSlides(slideIndex);


    nextbtn.addEventListener('click', function() {
        showSlides(slideIndex +=1);
    });

    for (var i = 0; i < addbtn.length; i++) {
            addbtn[i].addEventListener('click', function(){
            var number = count.textContent;
            number = parseInt(number);
            number++;
            addToCart();
            count.textContent = number;
        });
    }



function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");

    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
    
}


});


function showDropDown(){
    var dropdown = document.getElementById("dropdown-content");
    dropdown.style.display = "flex";
    
};
function hideDropDown(){
    var dropdown = document.getElementById("dropdown-content");
    dropdown.style.display = "none";
    
};


function menu_active(){
    var icon1 = document.getElementById("lines");
    var icon2 = document.getElementById("x");
    
    icon1.classList.toggle('hidden');
    icon2.classList.toggle('hidden');
};

function addToCart() {
    var cartMessage = document.getElementById("cartMessage");
    cartMessage.style.display = "block";
    setTimeout(function() {
        cartMessage.style.display = "none";
    }, 2000); 
}