import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import axios from 'axios'
import Head from 'next/head'
import globalStyles from '../styles/style.css'
import { stylesheet, classNames } from './index.css'
import cn from 'classnames'

const Index = (props) => (
  <Layout>
    <Head><style dangerouslySetInnerHTML={{ __html: globalStyles.stylesheet + stylesheet }} /></Head>
    <h1>My Blog</h1>
    <i className={cn(globalStyles.classNames['iconfont'], globalStyles.classNames['icon-play1'])}></i>
    <ul>
      {props.shows.map(({ show }) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a className={classNames.ani}>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman')
  const data = res.data

  return {
    shows: data
  }
}

export default Index
