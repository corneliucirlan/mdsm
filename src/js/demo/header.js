import React, { useEffect } from 'react'

import { menuItems, about, hero } from './data'

const Header = () => {
	
	// Call the MDSM plugin
	useEffect(() => {
		$('.navbar-toggler').mdsm()
	})

	return (
		<header className='container-fluid'>
			<nav className="navbar navbar-expand-md navbar-dark bg-none justify-content-start justify-content-md-between">
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<a className="navbar-brand" href="#">mdsm</a>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						{menuItems.map((item, index) => 
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
					<h1 className='hero-title'>{hero.title}</h1>
					<span className='hero-tagline'>{hero.description}</span>
				</div>

				<section id='about' className='about'>
					<h2 className='hero-title'>{about.title}</h2>
					<div className='row'>
						<p className='col-12 col-md-7'>{about.description}</p>
					</div>
				</section>
			</div>
		</header>
	)
}

export default Header