document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('hero-img');
    var addbtn = document.getElementsByClassName('add-to-cart');
    var count = document.getElementById('cart-count');

    image.addEventListener('mouseover', function() {
        this.style.opacity = '0.9'; 
        setTimeout(() => {
            this.src = '/imgs/hero-hover.png';
            this.style.opacity = '1'; 
        }, 100); 
    });

    image.addEventListener('mouseout', function() {
        this.style.opacity = '0.9'; 
        setTimeout(() => {
            this.src = '/imgs/hero-hover.svg';
            this.style.opacity = '1'; 
        }, 100); 
    });

    for (var i = 0; i < addbtn.length; i++) {
            addbtn[i].addEventListener('click', function(){
            var number = count.textContent;
            number = parseInt(number);
            number++;
            count.textContent = number;
        });
    }

    
});
function menu_active(){
    var icon1 = document.getElementById("lines");
    var icon2 = document.getElementById("x");

    icon1.classList.toggle('hidden');
    icon2.classList.toggle('hidden');
};