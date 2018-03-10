/**
 * responsive-navigation.js v1
 * Created by Ben Gillbanks <http://www.binarymoon.co.uk/>
 * Available under GPL2 license
 */

(function($) {
	$.fn.responsiveNavigation = function(options) {

		var defaults, display, resized;

		defaults = {
			min_menu_size: 4,
			prefix: '-',
			ignore_children: false,
			breakpoint: 449
		};

		options = $.extend(defaults, options);

		display = function() {
			var window_width = $(window).width();
			if (window_width < options.breakpoint) {
				$('.rn_nav').hide();
				$('.rn_select').show();
			}

			if (window_width > options.breakpoint) {
				$('.rn_nav').show();
				$('.rn_select').hide();
			}
		};

		$ (window).resize(function() {
			resized = true;
		});

		// super simple debounce
		// fires once every half second to do the work if needed
		setInterval( function() {
			if ( resized ) {
				display();
			}
			resized = false;
		}, 500 );

		return this.each(function() {
			var $this, select, navDepth;

			var $this = $(this);

			if ($this.find('a').length > options.min_menu_size) {
				$this.addClass('rn_nav');

				var select = $('<select class="rn_select"></select>');
				var navDepth = $this.parents().length;

				// add default text
				var navOptions = $('<option></option>');
				navOptions.text(js_i18n.menu);
				navOptions.attr('value', '');

				select.append(navOptions);

				$this.find('a').each(function() {
					var depth, i, optionText, navOptions;

					depth = (($(this).parents().length - navDepth) / 2) - 1;

					if (depth === 0 || (depth > 0 && options.ignore_children === false)) {

						optionText = $(this).text();
						if (depth > 0) {
							optionText = ' ' + optionText;
						}
						for (i = 0; i < depth; i ++) {
							optionText = options.prefix + optionText;
						}
						navOptions = $('<option></option>');
						navOptions.attr('value', $(this).attr('href'));
						if (document.location === $(this).attr('href')) {
							navOptions.attr('selected', 'selected');
						}
						navOptions.text(optionText);
						select.append(navOptions);

					}

				});

				select.change(function() {
					if ( this.value !== '' ) {
						document.location = this.value;
					}
				});
			}

			$this.after(select);
			display();
		});

	};

})(jQuery);