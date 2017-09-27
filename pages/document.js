import Document from 'next/document'
import Head from 'next/head'
import * as globalStyles from '../styles/style.css'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head><style dangerouslySetInnerHTML={{ __html: globalStyles.stylesheet }}/></Head>
      </html>
    )
  }
}
