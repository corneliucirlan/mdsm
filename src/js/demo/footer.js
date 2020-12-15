import React from 'react'
import Parser from 'html-react-parser'

import { footer } from './data'

const Footer = () => {
	return (
		<footer>
			<div className='container-fluid'>
				<h2 id='contact' className='footer-title'>{footer.title}</h2>			
				<div className='row'>
					{footer.text.map((element, index) => 
						<div key={index} className='col-12 col-md-6 offset-md-6'>
							<p>{Parser(element)}</p>
						</div>
					)}
				</div>
			</div>
		</footer>
	)
}

export default Footer