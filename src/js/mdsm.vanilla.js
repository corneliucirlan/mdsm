/**
 * MDSM
 *
 * jQuery | JavaScript plugin that enables mobile slide navigation for Bootstrap v5 framework
 *
 * @version 1.0.3
 * @author Corneliu Cirlan (www.corneliucirlan.com)
 */

(function() {

	this.mdsm = function(element) {

		// Disable scrolling
		const disableScroll = 'mdsm-ds'

		// Active state
		const activeState = 'mdsm-active'

		// Active menu overlay
		const overlayHTML = document.createElement('div')
		const overlay = 'mdsm-overlay'

		overlayHTML.classList.add(overlay)

		let dropdown = {
			toggle: 'dropdown-toggle',
			menu: 'dropdown-menu'
		}

		let getNextSibling = (elem, selector) => {

			// Get the next sibling element
			let sibling = elem.nextElementSibling;

			// If the sibling matches our selector, use it
			// If not, jump to the next sibling and continue the loop
			while (sibling) {
				if (sibling.matches(selector)) return sibling;
				sibling = sibling.nextElementSibling
			}

		}

		// Toggle dropdown submenu
		const toggleDropDown = target => {
			target.classList.toggle(activeState)
			getNextSibling(target, '.'+dropdown.menu).classList.toggle(activeState)
		}

		// Check if device is touch enabled
		const isTouchEnabled = () => {

			let prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

			let mq = function (query) {
				return window.matchMedia(query).matches;
			}

			if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
				return true;
			}

			// include the 'heartz' as a way to have a non matching MQ to help terminate the join
			// https://git.io/vznFH
			let query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
			return mq(query);
		}

		// Menu trigger
		let trigger = element,

			// Target menu
			target = document.querySelector(trigger.getAttribute('data-target'))

			// Mobile menu parent
			parent = trigger.closest('.navbar')

		// Check if menu has left/right added
		if (false === target.classList.contains('navbar-collapse-left') && false === target.classList.contains('navbar-collapse-right')) {
			target.classList.add('navbar-collapse-left')
		}

		// Open mobile menu
		const openMenu = () => {

			// Add overlay to DOM
			parent.insertBefore(overlayHTML, target)

			parent.classList.add(activeState)
			document.querySelector('body').classList.add(disableScroll)
		}

		// Close mobile menu
		const closeMenu = () => {
			parent.classList.remove(activeState)
			document.querySelector('.'+dropdown.toggle).classList.remove(activeState)
			document.querySelector('.'+dropdown.menu).classList.remove(activeState)
			document.querySelector('body').classList.remove(disableScroll)
		}

		// Open menu
		trigger.addEventListener('click', openMenu)

		// Close menu
		overlayHTML.addEventListener('click', closeMenu)
		document.addEventListener('keyup', event => {

			// Get the key
			let key = event.key || event.keyCode

			// Check if key is ESCAPE
			if (key === 'Escape' || key === 'Esc' || key === 27)
				closeMenu()
		})

		// Clicks if device is touch enabled
		if (isTouchEnabled())

				// Top level menu item click
				document.querySelectorAll('.nav-link')
					.forEach(item => {
						item.addEventListener('click', event => {

							// Dropdown menu toggle
							if (item.classList.contains(dropdown.toggle)) {
								event.preventDefault()
								toggleDropDown(event.target)
							}

							// Close menu
							if ('#' !== item.getAttribute('href'))
								closeMenu()

						})
					})

			// Device not touch enabled
			else {
				document.querySelectorAll('.'+dropdown.toggle)
					.forEach(item => {
						item.addEventListener('mouseover', event => {

							// Toggle dropdown menu
							toggleDropDown(event.target)

							// Prevent event propagation
							event.stopImmediatePropagation()
						})
					})
				document.querySelectorAll('.'+dropdown.toggle)
					.forEach(item => {
						item.addEventListener('mouseout', event => {

							// Toggle dropdown menu
							toggleDropDown(event.target)

							// Prevent event propagation
							event.stopImmediatePropagation()
						})
					})
			}

		// Dropdown menu item click
		document.querySelectorAll('.dropdown-item')
			.forEach(item => {
				item.addEventListener('click', () => {
					closeMenu()
				})
			})
	}

}())
