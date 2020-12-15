import React, { useState, useEffect } from 'react'
import Prism from 'prismjs'
import Parser from 'html-react-parser'

import CodeSample from './codeSample'
import { install, use, configure } from './data'

const Main = () => {

	// Set Github URL -- change later to proper URL
	const gitURL = 'https://api.github.com/repos/corneliucirlan/mdsm/tags'

	// Set the URL for the latest version
	const [zipURL, setZipURL] = useState('https://github.com/corneliucirlan/mdsm/tags')

	useEffect(() => {

		// Get the latest Github release
		getLatestGithubRelease()

		// Highlight code samples
		Prism.highlightAll()

	}, []);

	// Get the latest' release zip file
	const getLatestGithubRelease = async () => {
		const response = await fetch(gitURL)

		// Update URL if status is OK
		if (200 === response.status) {
			const zips = await response.json()
			setZipURL(zips[0].zipball_url)
		}
	}

	return (
		<main className='skewed-background'>
			<div className='container-fluid'>

				<section className='row'>
					<div className='col-12'>
						<h2 id='install'>{install.title}</h2>
						<p>{install.description}</p>
					</div>
					<div className='col-12 col-md-6'>
						<CodeSample lang='powershell' title={install.pm.title} code={install.pm.code} />
					</div>
					<div className='col-12 col-md-6'>
						<h3>{install.manual.title}</h3>
						<p>{Parser(install.manual.description)}</p>
						<a href={zipURL} target='_blank' className='btn btn-outline-primary'>{install.manual.buttonTitle}</a>
					</div>
				</section>

				<section className='row'>
					<div className='col-12'>
						<h2 id='use'>{use.title}</h2>
					</div>
					<div className='col-12'>
						{use.data.map((element, index) => <CodeSample key={index} lang={element.language} description={Parser(element.description)} code={element.code} />)}
					</div>
				</section>

				<section className='row'>
					<div className='col-12'>
						<h2 id='configure'>{configure.title}</h2>
						<p>{configure.description}</p>
					</div>
					{configure.data.map((element, index) => 
						<div key={index} className='col-12'>
							<h3>{element.title}</h3>
							<p>{Parser(element.description)}</p>
						</div>
					)}
				</section>
			</div>
		</main>
	)
}

export default Main