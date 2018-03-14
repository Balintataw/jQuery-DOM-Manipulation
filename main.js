$(document).ready(function() {
    // accordian
    $('.acc-item').click(function() {
        var targetElement = $('div', this);
        if ($('.acc-item-content').hasClass('show-toggle')) {
            $('.acc-item-content').removeClass('show-toggle')
        } 
        targetElement.toggleClass('show-toggle')
        
    });

    // carousel no `fadeIn` or `fadeOut` or `animate`
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        
        var slides = $(".mySlides");
        
        $.each(slides, function(i, item) {
            item.style.display = "none";
        })
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        
        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 3000); 
    }

    // slick carousel
    $('.fat-class').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        speed: 500,
        pauseOnHover: true,
        cssEase: 'linear'
      });

})