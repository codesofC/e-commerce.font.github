
var swiper = new Swiper(".container", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// Watch featured
let imgChanged=document.querySelector('.img_changed'),
    imgClick=document.querySelectorAll('.img_click');

let changeImage=function(){
    imgClick.forEach(item=>{
        item.classList.remove('active');
        this.classList.add('active');
        imgChanged.src=this.src;
    });
}

imgClick.forEach(item=>{
    item.addEventListener('click', changeImage);
});

// Product Galery (type product selected)
let divSelected=document.querySelectorAll('.product_type div'),
products=document.querySelectorAll('.name'),
selectedType=function(){
    divSelected.forEach(item=>{
        item.classList.remove('active');
        this.classList.add('active');
        let nom=this.textContent;
        products.forEach(e=>{
            e.parentNode.classList.remove('active');
            if(e.textContent!=nom){
                e.parentNode.classList.add('active');
            }
        });
    });
}

divSelected.forEach(item=>{
    item.addEventListener('click', selectedType);
});
