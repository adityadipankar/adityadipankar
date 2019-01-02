var images = [{name: 'Aircel', image: "images/logo-01.png"},{name: 'Aircel', image: "images/logo-01.png"},{name: 'Aircel', image: "images/logo-01.png"},{name: 'Aircel', image: "images/logo-01.png"},{name: 'Aircel', image: "images/logo-01.png"},{name: 'Aircel', image: "images/logo-01.png"},{name: 'Aircel', image: "images/logo-01.png"},{name: 'Aircel', image: "images/logo-01.png"},{name: 'Aircel', image: "images/logo-01.png"},{name: 'Aircel', image: "images/logo-01.png"},{name: 'Aircel', image: "images/logo-01.png"},{name: 'Aircel', image: "images/logo-01.png"},{name: 'Aircel', image: "images/logo-01.png"},{name: 'Aircel', image: "images/logo-01.png"},{name: 'Aircel', image: "images/logo-01.png"}]
$(function(){
        var container_width = $('.bubble_continer').width();
        var max_width = container_width; //1600 > container_width ? 1600 : container_width;
        var xDepthLeft = 0;
        var xDepthRight = 00;
        //initializing the bubble positions
        /*$.each(images, function(pos, bubble) {
            var scale = 1;
            var xTransform = 0;
            var yTransform = 0;

            if (pos / 3  > images.length/3 )
            $('.bubble_continer').append('<div class="bubble bubble_s1" style="opacity: 1; transform: matrix(0.8, 0, 0, 0.8, 2000, 350)">' +
                + '<img src="'+bubble.image+'">' +
                + '<span>' + bubble.name + '</span>' +
                '</div>')
        })*/

        var initialX = 0;
        var initialY = 80;
        $.each($('.bubble_continer').find('.bubble-row'), function() {
            var bubbles = $(this).find('.bubble');
            var gap = (container_width ) / bubbles.length;

            var xDist = initialX;
            var scale = 1;
            $.each(bubbles, function(pos, bubble) {
                var transform = $(bubble).css('transform');
                $(bubble).css('transform', ' matrix(0.8, 0, 0, 0.8, ' + (xDist + 0) +', ' + initialY + ') scale('+ 1 +')');
                xDist += gap;
                scale = scale === 1 ? 0.8 : 1;
            })
            initialX = initialX === 0 ? gap / 2 : 0;
            initialY += 150;
            //console.log(gap);
        })
        setTimeout(function(){
            setInterval(function() {
                $.each($('.bubble'), function(pos, bubble) {
                    var transform = $(bubble).css('transform').match(/-?[\d\.]+/g);
                    var xPos = transform[4];
                    transform[4] = parseFloat(xPos) < -xDepthLeft ? max_width + xDepthRight : parseFloat(xPos) - 5;
                    transform[5] = parseFloat(transform[5]) + Math.cos(parseFloat(transform[4]) / 10) * 3;

                    if (transform[4] < -xDepthLeft) {
                        $(bubble).css('opacity', 0);
                    } else if(transform[4] < container_width && $(bubble).css('opacity') !== 1){
                        $(bubble).css('opacity', 1);
                    }
                    $(bubble).css('transform', 'matrix(' + transform.join(',') + ')');
                });

            }, 200)
        }, 1000)
})
