import React, { useEffect } from 'react'
import './js/mdsm.js'

import Prism from 'prismjs';

import Header from './js/components/header'
import codeSamples from './js/components/codeSamples'

import './App.sass'
import CodeSample from './js/components/codeSample';

const App = () => {

	useEffect(() => {

		// Call the MDSM plugin
		$('.navbar-toggler').mdsm();

		// Highlight code samples
		Prism.highlightAll()
	})


	return (
		<div className=''>

			<Header />

			<main>
				<div className='container-fluid'>
					<h2 id='installation'>Installation</h2>
					<div className='row'>
						<div className='col-12 col-md-6'>
							<CodeSample lang='powershell' title='Package manager' code={codeSamples.install} />
						</div>
						<div className='col-12 col-md-6'>
							<h3>Manual</h3>
							<p>If you don’t use a package manager, there is a manual way of installing the plugin. Just download the zip archive from below, extract it, and place the files in their proper path, based on your project.</p>
							<a href='#' className='btn btn-primary'>Download .zip</a>
						</div>
					</div>
					
					<h2 id='usage'>Usage</h2>
					<div className='row'>
						<div className='col'>
							<CodeSample lang='markup' description={codeSamples.dependeciesDescription} code={codeSamples.dependecies} />
							<CodeSample lang='markup' description={codeSamples.scriptsDescription} code={codeSamples.scripts} />
							<CodeSample lang='markup' description={codeSamples.markupDescription} code={codeSamples.markup} />
							<CodeSample lang='javascript' description={codeSamples.callDescription} code={codeSamples.call} />
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default App