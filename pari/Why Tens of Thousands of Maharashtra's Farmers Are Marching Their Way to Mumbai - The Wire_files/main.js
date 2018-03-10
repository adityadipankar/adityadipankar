/**
 * main.js v1
 * Created by Ben Gillbanks <http://www.binarymoon.co.uk/>
 * Available under GPL2 license
 */

(function($){

	$(document).ready(function(){

		$( 'ul#nav' ).responsiveNavigation();

		// attachment page navigation
		if ( $( 'body' ).hasClass( 'attachment' ) ) {

			$( document ).keydown( function( e ) {

				if ( $( 'textarea, input' ).is( ':focus' ) ) {
					return;
				}

				var url = false;

				switch( e.which ) {
					// left arrow key (previous attachment)
					case 37:
						url = $( '.image-previous a' ).attr( 'href' );
						break;

					// right arrow key (next attachment)
					case 39:
						url = $( '.image-next a' ).attr( 'href' );
						break;

				}

				if ( url ) {
					window.location = url;
				}
			} );

		}

		// Arrange footer widgets
		if ( $.isFunction( $.fn.masonry ) ) {
			$( 'footer#footer .footer-widgets' ).imagesLoaded( function() {
				$( 'footer#footer .footer-widgets' ).masonry({
					itemSelector: '.widget',
					gutter: 0,
					isOriginLeft: ! $( 'body' ).is( '.rtl' )
				});
			});

			$( 'body.archive .testimonials' ).imagesLoaded( function() {
				$( 'body.archive .testimonials' ).masonry({
					itemSelector: '.testimonial',
					gutter: 0,
					isOriginLeft: ! $( 'body' ).is( '.rtl' )
				});
			});
		}

		// Load slides
		if ( $.isFunction( $.fn.elementalSlides ) ) {
			$( '.primary-wrapper' ).elementalSlides({
				'nav_arrows': true
			});
		}

		$( '.menu' ).find( 'a' ).on( 'focus blur', function() {
			$( this ).parents().toggleClass( 'focus' );
		} );

	});

})(jQuery);