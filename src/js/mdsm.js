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

	// Disable scrolling
	const disableScroll = 'mdsm-ds'

	// Active state
	const activeState = 'mdsm-active'

	// Active menu overlay
	const overlay = '<div class="mdsm-overlay"></div>'

	$.fn.mdsm = () => {

		// Add overlay to DOM
		$(overlay).insertBefore('.navbar-collapse')	

		// Enable menu
		$('.navbar-toggler').on('click', openMenu)

		// Disable menu
		$('.mdsm-overlay').on('click', closeMenu)
		$(document).on('keyup', event => {
			
			// Get the key
			let key = event.key || event.keyCode
			
			// Check if key is ESCAPE
			if (key === 'Escape' || key === 'Esc' || key === 27)
				closeMenu()
		})

		// Dropdown menu activation if touch enabled
		if (isTouchEnabled())
				$('.dropdown-toggle').on('click', event => {

					// Prevent default action
					event.preventDefault()

					// Toggle dropdown menu
					toggleDropDown(event.target)
					
				})

			// If not touch enabled
			else
				$('.dropdown-toggle').hover(event => {

					// Toggle dropdown menu
					toggleDropDown(event.target)

					// Prevent event propagation
					event.stopImmediatePropagation()
				})

		return this
	}
	
	const openMenu = () => {
		$('nav').addClass(activeState)
		$('body').addClass(disableScroll)
	}
	
	const closeMenu = () => {
		$('nav').removeClass(activeState)
		$('.dropdown-toggle').removeClass(activeState)
		$('.dropdown-menu').removeClass(activeState)
		$('body').removeClass(disableScroll)
	}

	const toggleDropDown = target => {
		let dMenu = $(target).next('.dropdown-menu')
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
	
})(jQuery)
