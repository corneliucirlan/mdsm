# MDSM - Material Design System Menu

As the name suggests (or at least, tries to), MDSM is a plugin for displaying navigation menus on mobile devices. It is written in jQuery and using the Bootstrap framework as a base.-


## Installation

### Using a package manager
```shell
# npm
npm install mdsm

# yarn
yard add mdsm
```

### Manual installation
Not using a package manager? No problem. Download the latest prodution build and place the content of the ```dist``` folder into your project.


## Usage
Start by adding the dependencies to your project.
```html
<!-- Bootstrap CSS -->
<link rel="stylesheet" href="//stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />

<!-- jQuery -->
<script src="//code.jquery.com/jquery-3.5.1.min.js"></script>
```
Then, add the scripts you downloaded earlier.
```html
<!-- CSS -->
<link rel="stylesheet" href="mdsm.min.css" />

<!-- JS -->
<script src="mdsm.min.js"></script>
```
After that, add the HTML template. The plugin makes use of Bootstrap’s ```data-target``` attribute to target the menu. By default, the menu will slide from the left side, as the ```navbar-collapse-left``` class is automatically added on runtime. To change the slide in from the right, add the ```navbar-collapse-right``` class to the targeted menu.
```html
<nav class="navbar navbar-expand-md navbar-dark bg-none justify-content-start justify-content-md-between">
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
</nav>
```


## Configuration
Since the plugin is built on Bootstrap's framework, many changes can be made using the built-in utilities.

### Color Schemes
The color scheme hasn’t been altered with the exception of adding a ```bg-none``` utility to make the menu’s background transparent on the desktop version. You can still use the ```navbar-light``` class for light background colors, or the ```navbar-dark``` class for dark background colors, and then the ```bg-*``` utilities to customize the background color itself.

### Containers
Even though it's not required by the plugin, you can wrap the navbar in a ```container``` or any variation to center align it on the page.

### Placement
Use Bootstrap's included [positioning utilities](https://getbootstrap.com/docs/5.0/utilities/position/) to place the navbar.

### Responsive behaviors
The plugin was written to use the ```navbar-expand-*``` utilities to determine when the menu needs to be collapsed behind a ```navbar-toggler``` button.

### Drop shadow
If you need any shadows on your menus, use the built-in [Bootstrap utilities](https://getbootstrap.com/docs/5.0/utilities/shadows/).


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[ISC](https://choosealicense.com/licenses/isc/)
