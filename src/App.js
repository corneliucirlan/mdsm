import React from 'react'

import Header from './js/demo/header'
import Main from './js/demo/main'
import Footer from './js/demo/footer'

// MDSM
import './js/mdsm.js'

// CSS
import './App.sass'

const App = () => {

	return (
		<div className='app-container'>
			<Header />
			<Main />
			<Footer />
		</div>
	)
}

export default App
