import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class extends Document {
	static async getInitialProps ({renderPage}) {
		const sheet = new ServerStyleSheet()
		const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
		const styleTags = sheet.getStyleElement()
		return {...page, styleTags}
	}

	render () {
		return (
			<html>
			<Head>
				<title>Video list</title>
				<link rel="stylesheet" href="/_next/static/style.css"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
              integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous"/>
				{this.props.styleTags}
			</Head>
			<body>
			<Main/>
			<NextScript/>
			</body>
			</html>
		)
	}
}
