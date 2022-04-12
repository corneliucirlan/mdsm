// Menu Items
export const menuItems = [
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
		title: 'Get in touch',
		href: '#contact',
		classes: 'nav-link',
		containerClasses: 'nav-item',
		hasSubmenu: false,
	}
]

// Hero data
export const hero = {
	title: `MDSM`,
	description: `Material Design System Menu`
}

// About data
export const about = {
	title: `About`,
	description: `As the name suggests (or at least, tries to), MDSM is a plugin for displaying navigation menus on mobile devices. It is written in both jQuery and JavaScript, using the Bootstrap framework as a base.`
}

// Install data
export const install = {
	title: 'Install',
	description: `Whether you build your website using a package manager or handle the files manually, we’ve got you covered.`,
	pm: {
		title: 'Package Manager',
		code: `# npm
npm install mdsm

# yarn
yard add mdsm`
	},
	manual: {
		title: 'Manual',
		description: 'Not using a package manager? No problem. Download the latest prodution build from below and place the content of the <code class="language-markup">dist</code> folder into your project.',
		buttonTitle: 'Download .zip',
	}
}

// Use data
export const use = {
	title: 'Use',
	data: [
		{
			description: `Start by adding the dependencies to your project.`,
			language: `markup`,
			code: `<!-- Bootstrap CSS -->
<link rel="stylesheet" href="//stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />

<!-- jQuery (if required by your use case) -->
<script src="//code.jquery.com/jquery-3.5.1.min.js"></script>`
		},
		{
			description: `Then, add the scripts you downloaded earlier.`,
			language: `markup`,
			code:  `<!-- CSS -->
<link rel="stylesheet" href="mdsm.min.css" />

<!-- jQuery version -->
<script src="mdsm.jquery.min.js"></script>

<!-- JavaScript version -->
<script src="mdsm.vanilla.min.js"></script>`
		},
		{
			description: `After that, add the HTML template. The plugin makes use of Bootstrap’s <code class='language-markup'>data-target</code> attribute to target the menu. By default, the menu will slide from the left side, as the <code class='language-markup'>navbar-collapse-left</code> class is automatically added on runtime. To change the slide in from the right, add the <code class='language-markup'>navbar-collapse-right</code> class to the targeted menu.`,
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
			description: `Finally, call the plugin.`,
			language: `javascript`,
			code: `// jQuery version
$('.navbar-toggler').mdsm();

// JavaScript version
new mdsm(document.querySelector('.navbar-toggler'));`
		}
	]
}

// Configure data
export const configure = {
	title: 'Configure',
	description: `Since the plugin is built on Bootstrap's framework, many changes can be made using the built-in utilities.`,
	data: [
		{
			title: `Color Schemes`,
			description: `The color scheme hasn’t been altered with the exception of adding a <code class='language-css'>bg-none</code> utility to make the menu’s background transparent on the desktop version. You can still use the <code class='language-css'>navbar-light</code> class for light background colors, or the <code class='language-css'>navbar-dark</code> class for dark background colors, and then the <code class='language-css'>bg-*</code> utilities to customize the background color itself.`
		},
		{
			title: `Containers`,
			description: `Even though it's not required by the plugin, you can wrap the navbar in a <code class='language-css'>container</code> or any variation to center align it on the page.`
		},
		{
			title: `Placement`,
			description: `Use Bootstrap's included <a href="https://getbootstrap.com/docs/5.0/utilities/position/" target="_blank">positioning utilities</a> to place the navbar.`
		},
		{
			title: `Responsive behaviors`,
			description: `The plugin was written to use the <code class="language-css">navbar-expand-*</code> utilities to determine when the menu needs to be collapsed behind a <code class="language-css">navbar-toggler</code> button.`
		},
		{
			title: `Drop shadow`,
			description: `If you need any shadows on your menus, use the built-in <a href='https://getbootstrap.com/docs/5.0/utilities/shadows' target='_blank'>Bootstrap utilities</a>.`
		}
	]
}

// Footer
export const footer = {
	title: `Get in touch`,
	text: [
		`If you want to contact me for a question, suggestion, or just to chat, my inbox is always opened at <a class='footer' href='mailto:corneliu@corneliucirlan.com' target='_blank'>corneliu@corneliucirlan.com</a>`,
		`To add your contribution to this project, the source is <a class='footer' href='https://github.com/corneliucirlan/mdsm' target='_blank'>hosted on GitHub</a>.`
	]
}


// Metadata
import screenshot from './assets/screenshot.jpg'
export const metadata = {
	title: "MDSM - Material Design System Menu",
	description: "A jQuery plugin built on top of Bootstrap’s framework to create a mobile responsive menu similar to Google’s Material Design.",
	image: screenshot,
	url: "https://mdsm.corneliucirlan.com",
	author: 'Corneliu Cîrlan',
	schema: {
		"@context": "https://schema.org/",
		"@type": "Product",
		name: "MDSM - Material Design System Menu",
		image: screenshot,
		description: "A jQuery plugin built on top of Bootstrap’s framework to create a mobile responsive menu similar to Google’s Material Design.",
		brand: "Corneliu Cîrlan"
	},
	facebookAppID: "521959071625533",
	twitterUsername: "@corneliucirlan",
}
