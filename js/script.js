// Работа с плашкой и кнопкой
document.querySelector(".header-sale-img").addEventListener("click", function(){
    document.querySelector(".header-sale").style.display = "none";
})

// Блок с ценами 
document.querySelector(".price-btn").addEventListener("click", function(){
    document.querySelector(".price-btn").style.display = "none";
    // Задержка создана для плавного появления блока в момент некой загрузки 
    setTimeout(() => {
        document.querySelector(".price-block-dop").style.display = "flex";
    }, 200)
})

// Свайпер 
new Swiper (".image-slider", {
    pagination: {                       
        el: '.swiper-pagination',
        clickable: true,     
    },
});

new Swiper (".reviews-slider", {
    pagination: {                       
        el: '.swiper-pagination',
        clickable: true,     
    },
});
