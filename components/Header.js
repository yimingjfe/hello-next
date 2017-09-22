import Link from 'next/link'
// import style from './style.css'
import Head from 'next/head'
import { stylesheet, classNames } from './style.css'
console.log('classNames', classNames)
console.log('stylesheet', stylesheet)

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
        <Head><style dangerouslySetInnerHTML={{ __html: stylesheet }} /></Head>
        About
      </a>
    </Link>
  </div>
)

export default Header
