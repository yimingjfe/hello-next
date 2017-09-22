import Layout from '../components/MyLayout.js'
import axios from 'axios'

// export default (props) => (
//     <Layout>
//  <h1>{props.url.query.title}</h1>
//  <p>This is the blog post content.</p>
//     </Layout>
// )

// const Content = (props) => (
//   <div>
//     <h1>{props.url.query.id}</h1>
//     <p>This is the blog post content.</p>
//   </div>
// )

const Post = (props) => (
  <Layout>
    {/* <h1>{props.url.query.title}</h1>
    <p>This is the blog post content.</p> */}
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium}/>
  </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  let show = null
  try {
    const res = await axios.get(`https://api.tvmaze.com/shows/${id}`)
    show = await res.data
  } catch (error) {
    console.error('err')
  }

  // console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post
