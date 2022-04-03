/**
 * MDSM
 *
 * jQuery plugin that enables mobile slide navigation for Bootstrap v4 framework
 *
 * @version 1.0.3
 * @author Corneliu Cirlan (www.corneliucirlan.com)
 */

(function()
{

	this.mdsm = function(element) {

		console.log('MDSM Vanilla JS Works.')

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

		// Dropdown menu item click
		document.querySelectorAll('.dropdown-item')
			.forEach(item => {
				item.addEventListener('click', () => {
					closeMenu()
				})
			})
	}

}())
