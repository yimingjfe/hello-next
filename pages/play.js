import Layout from '../components/MyLayout.js'
import Player from '../components/Player.js'
import React, { Component } from 'react'
import Head from 'next/head'
import { stylesheet } from './play.css'

class Play extends Component {
  render() {
    return (
      <Layout>
        <Head><style dangerouslySetInnerHTML={{ __html: stylesheet }} /></Head>
        <Player></Player>
      </Layout>
    )
  }
}

// Play.getInitialProps = async function (context) {
//   return 111
// }

export default Play
