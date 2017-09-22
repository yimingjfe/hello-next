import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import axios from 'axios'

// const PostLink = (props) => (
//   <li>
//     <Link href={`/post?title=${props.title}`} as={`/p/${props.id}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// )

const Index = (props) => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {props.shows.map(({ show }) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
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
