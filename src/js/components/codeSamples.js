export default {
	install: `# Via NPM
npm install mdsm

# Via Bower
bower install mdsm	
`,
	dependecies: `<!-- Bootstrap CSS -->
<link rel="stylesheet" href="//stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />

<!-- jQuery -->
<script src="//code.jquery.com/jquery-3.5.1.min.js"></script>
`,
	scripts: `<!-- CSS -->
<link rel="stylesheet" href="mdsm.min.css" />

<!-- JS -->
<script src="mdsm.min.js"></script>
`,
	markup: `<!-- Menu template -->
<nav class="navbar fixed-top navbar-toggleable-md navbar-dark bg-primary">
    <div class="container-fluid">
        <!-- Navbar toggle -->
        <button class="navbar-toggler navbar-toggler-left" type="button">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Brand -->
        <h1 class="navbar-brand">MDSM</h1>

        <!-- Main menu -->
        <ul class="navbar-nav navbar-nav-left">
            <li class="nav-item active"><a class="nav-link" href="#about">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#instalation">Instalation</a></li>
            <li class="nav-item"><a class="nav-link" href="#options">Options</a></li>
            <li class="nav-item"><a class="nav-link" href="#development">Development</a></li>
        </ul>
    </div>
</nav>
`,
	call: `$('.navbar-nav-left').mdsm();`,
	dependeciesDescription: `Add the dependencies to your project.`,
	scriptsDescription: `Add the plugin' scripts`,
	markupDescription: `Add the HTML template`,
	callDescription: `Call the plugin`
}