/**
 * MDSM
 *
 * jQuery plugin that enables mobile slide navigation for Bootstrap v4 framework
 *
 * @version 1.0.0
 * @author Corneliu Cirlan (www.corneliucirlan.com)
 */

(function($) {
	'use strict'

	$.fn.mdsm = function() {

		// Disable scrolling
		const disableScroll = 'mdsm-ds'

		// Active state
		const activeState = 'mdsm-active'

		// Active menu overlay
		const overlayHTML = '<div class="mdsm-overlay"></div>'
		const overlay = '.mdsm-overlay'

		let classes = {
			dropdownToggle: 'dropdown-toggle',
			dropdownMenu: 'dropdown-menu'
		}

		// Toggle dropdown submenu
		const toggleDropDown = target => {
			let dMenu = $(target).next(`.${classes.dropdownMenu}`)
			$(target).toggleClass(activeState)
			dMenu.toggleClass(activeState)
		}

		// Check if device is touch enabled
		const isTouchEnabled = () => {

			var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

			var mq = function (query) {
				return window.matchMedia(query).matches;
			}

			if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
				return true;
			}

			// include the 'heartz' as a way to have a non matching MQ to help terminate the join
			// https://git.io/vznFH
			var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
			return mq(query);
		}

		return this.each((index, element) => {

			// Menu trigger
			let trigger = element,

				// Target menu
				target = $(trigger).attr('data-target'),

				// Mobile menu parent
				parent = $(trigger).parent('.navbar')

			// Open mobile menu
			const openMenu = () => {
				$(parent).addClass(activeState)
				$('body').addClass(disableScroll)
			}

			// Close mobile menu
			const closeMenu = () => {
				$(parent).removeClass(activeState)
				$(`.${classes.dropdownToggle}`).removeClass(activeState)
				$(`.${classes.dropdownMenu}`).removeClass(activeState)
				$('body').removeClass(disableScroll)
			}
			
			// Add overlay to DOM
			$(overlayHTML).insertBefore(target)

			// Open menu
			$(trigger).on('click', openMenu)

			// Close menu
			$(overlay).on('click', closeMenu)
			$(document).on('keyup', event => {

				// Get the key
				let key = event.key || event.keyCode

				// Check if key is ESCAPE
				if (key === 'Escape' || key === 'Esc' || key === 27)
					closeMenu()
			})

			// Clicks if device is touch enabled
			if (isTouchEnabled())
					$(target).on('click', 'a', event => {

						// Dropdown menu toggle
						if ($(event.target).hasClass(classes.dropdownToggle)) {
							event.preventDefault()
							toggleDropDown(event.target)
						}

						if ($(event.target).attr('href') !== '#') {
							closeMenu()
						}
					})

				// If not touch enabled
				else
					$(`.${classes.dropdownToggle}`).hover(event => {
						
						// Toggle dropdown menu
						toggleDropDown(event.target)
						
						// Prevent event propagation
						event.stopImmediatePropagation()
					})
		})
	}
	
})(jQuery)
