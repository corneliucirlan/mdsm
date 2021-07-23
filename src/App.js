import React, { useEffect } from 'react'

import TagManager from 'react-gtm-module'

import Header from './js/demo/header'
import Main from './js/demo/main'
import Footer from './js/demo/footer'

// MDSM
import './js/mdsm.js'

// CSS
import './App.sass'

const App = () => {

	// Fire ReactGA only once
	useEffect(() => {

		// Configure GTM
		const tagManagerArgs = {
			gtmId: 'GTM-MJ9F27H'
		}

		// Initialize GTM
		TagManager.initialize(tagManagerArgs)

	}, [])

	return (
		<div className='app-container'>
			<Header />
			<Main />
			<Footer />
		</div>
	)
}

export default App
