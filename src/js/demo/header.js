import React, { useEffect } from 'react'

import { MenuItems } from './data'

const Header = () => {
	
	// Call the MDSM plugin
	useEffect(() => {
		$('.navbar-toggler').mdsm()
	})

	return (
		<header>

			<div className='skewed-background'>
				<div className='container-fluid'>

					<nav className="navbar navbar-expand-md navbar-dark bg-none justify-content-start justify-content-md-between">
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>

						<a className="navbar-brand" href="#">mdsm</a>

						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav ml-auto">
								{MenuItems.map((item, index) => 
									<li key={index} className={`${item.containerClasses}`}>
										<a className={`${item.classes}`} href={`${item.href}`}>{item.title}</a>
											{
												item.hasSubmenu &&
												<div className="dropdown-menu">
													{item.submenuItems.map((subItem, subIndex) => <a key={subIndex} className={`${subItem.classes}`} href={`${subItem.href}`}>{subItem.title}</a>)}
												</div>
											}
									</li>
								)}
							</ul>
						</div>
					</nav>

					<div className='hero-container'>
						<div>
							<h1 className='hero-title'>MDSM</h1>
							<span className='hero-tagline'>Material Design System Menu</span>
						</div>

						<div id='about'>
							<h2 className='hero-title'>About the project</h2>
							<div className='row'>
								<p className='col-12 col-md-7'>I’ve used a lot of plugins to create my menus for the mobile version of websites. But I never found a plugin to fully satisfy my needs. So I created my own.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header