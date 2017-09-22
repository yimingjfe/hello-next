import Header from './Header.js'
import style from './style.css'

// const layoutStyle = {
//   margin: 20,
//   padding: 20,
//   border: '1px solid #DDD'
// }

const Layout = (props) => (
  <div className={style.layout}>
    <Header />
    {props.children}
  </div>
)

export default Layout
