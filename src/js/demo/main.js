import React, { useEffect } from 'react'
import Prism from 'prismjs'
import Parser from 'html-react-parser'

import CodeSample from './codeSample'
import { install, use, configure } from './data'

const Main = () => {

	// Highlight code samples
	useEffect(() => {
		Prism.highlightAll()
	})

	return (
		<main className='container-fluid'>
			<h2 id='install'>{install.title}</h2>
			<section className='row'>
				<div className='col-12 col-md-6'>
					<CodeSample lang='powershell' title={install.pm.title} code={install.pm.code} />
				</div>
				<div className='col-12 col-md-6'>
					<h3>{install.manual.title}</h3>
					<p>{Parser(install.manual.description)}</p>
					<a href='#' className='btn btn-outline-primary'>{install.manual.buttonTitle}</a>
				</div>
			</section>

			<h2 id='use'>{use.title}</h2>
			<section className='row'>
				<div className='col'>
					{use.data.map((element, index) => <CodeSample key={index} lang={element.language} description={element.description} code={element.code} />)}
				</div>
			</section>

			<h2 id='configure'>{configure.title}</h2>
			<section className='row'>
				{configure.data.map((element, index) => 
					<div key={index} className='col-12'>
						<h3>{element.title}</h3>
						<p>{Parser(element.description)}</p>
					</div>
				)}
			</section>
		</main>
	)
}

export default Main