/**
 * slider.js v1.2
 * Created by Ben Gillbanks <http://www.binarymoon.co.uk/>
 * Available under GPL2 license
 */
/* global js_i18n:true */

(function( $ ) {
	$.fn.elementalSlides = function( options ) {

		var total_slides = 0;

		var defaults = {
			interval: 4000,
			group_selector: 'article',
			nav_arrows: false,
		};
		options = $.extend( defaults, options );

		return this.each( function() {

			var start_timer = function() {
				clearInterval( timer );
				timer = setInterval( function() { next(); }, interval );
			};

			var display = function( slide ) {
				articles.fadeOut( 500 ).removeClass( 'current' ).filter( slide ).fadeIn( 500 ).addClass( 'current' );
			};

			var next = function() {
				var next_slide = nav.find( '.selected' ).removeClass( 'selected' ).next();
				if ( next_slide.length === 0 ) {
					next_slide = nav.find( ':first' );
				}
				next_slide.addClass('selected');
				display( next_slide.attr( 'href' ) );
			};

			var previous = function() {
				var next_slide = nav.find( '.selected' ).removeClass( 'selected' ).prev();
				if ( next_slide.length === 0 ) {
					next_slide = nav.find( ':last' );
				}
				next_slide.addClass( 'selected' );
				display( next_slide.attr( 'href' ) );
			};

			var $this = $( this );
			var timer;
			var slide_count = 0;

			// remove empty elements
			$this.children( options.group_selector ).filter( function() {
				return $.trim( this.innerHTML ).length < 1;
			}).remove();

			var articles = $this.children( options.group_selector );
			var nav = $this.find( 'nav' );
			var interval = $this.data( 'interval' ) || options.interval;

			// quit if there is nothing to display
			if ( articles.length <= 1 ) {
				// make sure the slides are visible
				articles.fadeIn();
				return;
			}

			// create nav if it doesn't exist
			if ( nav.length === 0 ) {
				nav = $( '<nav></nav>' );
				$this.prepend( nav );
			}

			// loop through articles and create buttons for the nav
			articles.each( function() {
				slide_count ++;
				total_slides ++;
				$( this ).attr( 'id', 'slide_' + total_slides );
				var tab = $( '<a href="#slide_' + total_slides + '">' + slide_count + '</a>' );
				nav.append( tab );
			});

			// click navigation items
			nav.find( 'a' ).click( function() {
				display( this.hash );
				nav.find( 'a' ).removeClass( 'selected' );
				$( this ).addClass( 'selected' );
				start_timer();
				return false;
			});

			// stop the animation when the mouse hovers the content (so user is reading content)
			$this[($.fn.hoverIntent) ? 'hoverIntent' : 'hover'](function(){
				clearInterval( timer );
			}, function(){
				start_timer();
			});

			// add next and previous links to the slider nav
			if ( defaults.nav_arrows ) {
				var arrow_next = $( '<a href="#next" class="arrow arrow-next"><span>' + js_i18n.next + '</span></a>' );
				arrow_next.click(function(){
					next();
					start_timer();
					return false;
				});
				$this.append( arrow_next );

				var arrow_prev = $( '<a href="#prev" class="arrow arrow-prev"><span>' + js_i18n.prev + '</span></a>' );
				arrow_prev.click(function(){
					previous();
					start_timer();
					return false;
				});
				$this.append( arrow_prev );
			}

			nav.find( ':first' ).click();
			start_timer();

		});

	};
})( jQuery );