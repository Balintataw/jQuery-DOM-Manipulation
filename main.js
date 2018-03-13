$(document).ready(function() {
    // accordian
    $('.acc-item').click(function() {
        var targetElement = $('div', this);
        if ($('.acc-item-content').hasClass('show-toggle')) {
            $('.acc-item-content').removeClass('show-toggle')
        }
        targetElement.toggleClass('show-toggle')
    });

    // carousel
    $.each(carouselImages, function(item) {
        console.log('yay')
        $('.carousel-container').append()
    })

})