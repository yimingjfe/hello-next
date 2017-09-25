import Link from 'next/link'
// import style from './style.css'
import Head from 'next/head'
import { stylesheet, classNames } from './style.css'
import * as globalStyles from '../styles/style.css'
// const linkStyle = {
//   marginRight: 15
// }

const Header = () => (
  <div>
    <Link href='/'>
      <a>Home</a>
    </Link>
    <Link href='/about'>
      <a className={classNames.content}>
        <Head><style dangerouslySetInnerHTML={{ __html: globalStyles.stylesheet }}/></Head>
        <Head><style dangerouslySetInnerHTML={{ __html: stylesheet }} /></Head>
        <span className={classNames.child}>About</span>
      </a>
    </Link>
  </div>
)

export default Header
