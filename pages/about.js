import Layout from '../components/MyLayout.js'

const styles = {
  content: {
    color: 'red'
  },
  text: {
    fontSize: '16px'
  }
}

export default () => (
  <Layout>
    <p style={[styles.content, styles.text]}>This is the about page</p>
  </Layout>
)
