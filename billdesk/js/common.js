$(function() {
    $('.carousel').carousel({
        interval: 5000
    });
    window.onscroll = function(ev) {
        if (window.scrollY > 20) {
            $('.header').addClass('header-sticky');
        } else if (window.scrollY < 15) {
            console.log('on top');
            $('.header').removeClass('header-sticky');
        }
    };
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.slide-right, .slide-left, .fade-in').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                if($(this).hasClass('slide-right')) {
                    $(this).animate({'opacity':'1', 'left': '0'},1000);
                } else if($(this).hasClass('slide-left')) {
                    $(this).animate({'opacity':'1', 'right': '0'},1000);
                } else if($(this).hasClass('fade-in')){
                    $(this).animate({'opacity':'1'},1000)
                }
            }
        });
    });
    $(function() {
        var menu = $('#dl-menu').dlmenu();
        $('#dl-menu .close').on('click', function(){
            $('#dl-menu').dlmenu('closeMenu');
            //$('#dl-menu .dl-trigger').trigger('click');
        })
    });
    $(function(){
        $('.tab-content').children(":not(.active)").css('display', 'none');
        $('a[role="tab"]').on('click', function(e){
            e.preventDefault();
            var $new_tab = $(this);
            var $new_tab_content = $($new_tab.attr("href"));
            var tabs = $(this).closest('[role="tablist"]');
            var transitionDuration = 0;

            tabs.siblings('div.tab-content').find('.tab-pane').stop();
            tabs.siblings('div.tab-content').find('.tab-pane.active').fadeOut(transitionDuration / 2, function(){
                tabs.find('.active').removeClass('active');
                $new_tab.parent('li').addClass('active');
                $(this).removeClass('active');
                $new_tab_content.addClass('active');
                $new_tab_content.fadeIn(transitionDuration / 2);
            });
        })
    })
})
