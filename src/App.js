import React, { useEffect } from 'react'
import Prism from 'prismjs'

import Header from './js/demo/header'
import CodeSample from './js/demo/codeSample'
import { CodeExamples } from './js/demo/data'

// MDSM
import './js/mdsm.js'

// CSS
import './App.sass'

const App = () => {

	useEffect(() => {

		// Call the MDSM plugin
		$('.navbar-toggler').mdsm();

		// Highlight code samples
		Prism.highlightAll()
	})


	return (
		<div>

			<Header />

			<main>
				<div className='container-fluid'>
					<h2 id='installation'>Installation</h2>
					<div className='row'>
						<div className='col-12 col-md-6'>
							<CodeSample lang='powershell' title='Package manager' code={CodeExamples.install} />
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
							<CodeSample lang='markup' description={CodeExamples.dependeciesDescription} code={CodeExamples.dependecies} />
							<CodeSample lang='markup' description={CodeExamples.scriptsDescription} code={CodeExamples.scripts} />
							<CodeSample lang='markup' description={CodeExamples.markupDescription} code={CodeExamples.markup} />
							<CodeSample lang='javascript' description={CodeExamples.callDescription} code={CodeExamples.call} />
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default App