const Koa = require('koa')
const router = require('koa-router')()
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = new Koa()

    router.get('/p/:id', async(ctx) => {
      const actualPage = '/post'
      const queryParams = { id: ctx.params.id }
      await app.render(ctx.req, ctx.res, actualPage, queryParams)
    })

    router.get('*', async(ctx) => {
      return handle(ctx.req, ctx.res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })

    server.use(router.routes())
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
