// Menu Items
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
				title: 'Install',
				href: '#install',
				classes: 'dropdown-item',
			},
			{
				title: 'Use',
				href: '#use',
				classes: 'dropdown-item',
			},
			{
				title: 'Configure',
				href: '#configure',
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

// Install data
export const install = {
	title: 'Install',
	pm: {
		title: 'Package Manager',
		code: `# npm
npm install mdsm

# yarn
yard add mdsm`
	},
	manual: {
		title: 'Manual',
		description: 'Not using a package manager? No problem. Download the latest prodution build from below and extract the content of the <code class="language-markup">dist</code> folder into your project.',
		buttonTitle: 'Download .zip',
	}
}

// Use data
export const use = {
	title: 'Use',
	data: [
		{
			description: `Add the dependencies to your project.`,
			language: `markup`,
			code: `<!-- Bootstrap CSS -->
<link rel="stylesheet" href="//stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />

<!-- jQuery -->
<script src="//code.jquery.com/jquery-3.5.1.min.js"></script>`
		},
		{
			description: `Add the plugin' scripts`,
			language: `markup`,
			code:  `<!-- CSS -->
<link rel="stylesheet" href="mdsm.min.css" />

<!-- JS -->
<script src="mdsm.min.js"></script>`
		},
		{
			description: `Add the HTML template`,
			language: `markup`,
			code: `<nav class="navbar navbar-expand-md navbar-dark bg-none justify-content-start justify-content-md-between">
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>

	<a class="navbar-brand" href="#">MDSM</a>

	<div class="collapse navbar-collapse" id="navbarSupportedContent">
		<ul class="navbar-nav ml-auto">
			<li class="nav-item active"><a class="nav-link" href="/">Home</a></li>
			<li class="nav-item"><a class="nav-link" href="#about">About</a></li>
			<li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle" href="#">Documentation</a>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="#install">Install</a>
					<a class="dropdown-item" href="#use">Use</a>
					<a class="dropdown-item" href="#configure">Configure</a>
				</div>
			</li>
			<li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
		</ul>
	</div>
</nav>`
		},
		{
			description: `Call the plugin`,
			language: `javascript`,
			code: `$('.navbar-toggler').mdsm();`
		}
	]
} 

// Configure data
export const configure = {
	title: 'Configure',
	data: [
		{
			title: `Color Schemes`,
			description: `Theming the navbar hasn't been affected by the plugin. Choose from <code class="language-css">.navbar-light</code> for light background colors, or <code class="language-css">.navbar-dark</code> for dark background colors. Then, customize the background with <code class="language-css">.bg-*</code> utilities. The only change made by the plugin, is adding a <code class="language-css">.bg-none</code> utility for rendering the background transparent.`
		},
		{
			title: `Containers`,
			description: `Even though it's not required by the plugin, you can wrap the navbar in a <code class="language-markup">.container</code> to center align it on the page.`
		},
		{
			title: `Placement`,
			description: `Use Bootstrap's included <a href="https://getbootstrap.com/docs/4.5/utilities/position/" target="_blank">positioning utilities</a> to place the navbar.`
		},
		{
			title: `Responsive behaviors`,
			description: `The plugin was written to use the <code class="language-css">.navbar-expand-*</code> utilities to determine when the menu needs to be collapsed behind a <code class="language-css">.navbar-toggler</code> button.`
		},
		{
			title: `Drop shadow`,
			description: `If you need a drop shadow on the navbar, Bootstrap has <a href="https://getbootstrap.com/docs/4.5/utilities/shadows/" target="_blank">utilities included</a> that can help with that.`
		}
	]
}