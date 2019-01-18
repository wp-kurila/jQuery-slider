$(document).ready(function(){
    var slideNow = 1;
    var slideCount = $('.slider-view_area-slide').children().length;
    
    $('.btn-next').click(nextSlide);
    $('.btn-prev').click(prevSlide);

    function nextSlide() {
        if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
            $('.slider-view_area-slide').css({
                'transform': 'translate(0,0)'
            });
            slideNow = 1;
        } else {
            var translateWidth = -$('.slider-view_area').width() * (slideNow);
            $('.slider-view_area-slide').css({
                'transform': 'translate('+translateWidth+'px,0)'
            });
            slideNow++;
        }
    }

    function prevSlide() {
        if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
            var translateWidth = -$('.slider-view_area').width() * (slideCount-1);
            $('.slider-view_area-slide').css({
                'transform': 'translate('+translateWidth+'px,0)'
            });
            slideNow = slideCount;
        } else {
            var translateWidth = -$('.slider-view_area').width() * (slideNow - 2);
            $('.slider-view_area-slide').css({
                'transform': 'translate('+translateWidth+'px,0)'
            });
            slideNow--;
        }
    }
})