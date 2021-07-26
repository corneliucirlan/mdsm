import React from 'react'
import { Helmet } from 'react-helmet'

import { metadata } from './data.js'

const Metadata = () => {
	return (
		<Helmet>
			<meta charset='utf-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1' />

			<title>{metadata.title}</title>
			<meta name='description' content={metadata.description} />

			{/* <!--  Essential META Tags --> */}

			<meta property='og:title' content={metadata.title} />
			<meta property='og:description' content={metadata.description} />
			<meta property='og:image' content={metadata.image} />
			<meta property='og:url' content={metadata.url} />
			<meta property='og:type' content='website' />
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='author' content={metadata.author} />

			{/* <!--  Non-Essential, But Recommended --> */}
			<meta property='og:site_name' content={metadata.title} />
			<meta name='twitter:image:alt' content={metadata.title} />

			{/* <!--  Non-Essential, But Required for Analytics --> */}
			<meta property='fb:app_id' content={metadata.facebookAppID} />
			<meta name='twitter:site' content={metadata.twitterUsername} />

			{/* <link rel='preconnect' href='https://fonts.googleapis.com' /> */}
			<link rel='preconnect' href='https://www.google-analytics.com' />

			<link rel='manifest' href='/manifest.json' />

			<script type="application/ld+json">{JSON.stringify(metadata.schema)}</script>

		</Helmet>
	)
}

export default Metadata
