import React from 'react'

const CodeSample = (prop) => {

	let codeLanguage = `language-${prop.lang}`,
		hasTitle = prop.title !== undefined ? true : false,
		hasDescription = prop.description !== '' ? true : false

	return (
		<article>
			{ hasTitle && <h3>{prop.title}</h3> }
			{ hasDescription && <p>{prop.description}</p> }
			<pre className={codeLanguage}>
				<code>{prop.code}</code>
			</pre>
		</article>
	)
}

export default CodeSample