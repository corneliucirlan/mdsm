export const MenuItems = [
	{
		title: 'Home',
		href: '/',
		classes: 'nav-link',
		containerClasses: 'nav-item active',
		hasSubmenu: false,
	},
	{
		title: 'About',
		href: '#about',
		classes: 'nav-link',
		containerClasses: 'nav-item',
		hasSubmenu: false,
	},
	{
		title: 'Documentation',
		href: '#',
		classes: 'nav-link dropdown-toggle',
		containerClasses: 'nav-item dropdown',
		hasSubmenu: true,
		submenuItems: [
			{
				title: 'Installation',
				href: '#installation',
				classes: 'dropdown-item',
			},
			{
				title: 'Usage',
				href: '#usage',
				classes: 'dropdown-item',
			},
			{
				title: 'Settings',
				href: '#settings',
				classes: 'dropdown-item',
			},
		]
	},
	{
		title: 'Contact',
		href: '#',
		classes: 'nav-link',
		containerClasses: 'nav-item',
		hasSubmenu: false,
	}
]