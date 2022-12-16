$(function(){
    let header = $("#header");
    let introH = $("#intro").innerHeight();
    let scrollInfo = $(window).scrollTop();
    
    load(scrollInfo, introH)
    /* Fixed Header */
    $(window).on('scroll resize', function(){ 
        let scrollInfo = $(window).scrollTop();
        
        load(scrollInfo, introH)
    });
     
    function load(scrollInfo, introH){
        if (scrollInfo > introH){
            header.addClass("fixed");
        }
        else{
            header.removeClass("fixed");
        }
    }

    /* Smooth Scroll */
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        
        $('html, body').animate({
            scrollTop: elementOffset - 45
        }, 900);
    })
});