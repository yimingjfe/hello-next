const koa = require('koa')
const router = require('koa-router')()
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = new koa()

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

  // server.use(async (ctx, next) => {
  //   // Koa doesn't seems to set the default statusCode.
  //   // So, this middleware does that
  //   ctx.res.statusCode = 200
  //   await next()
  // })

  server.use(router.routes())
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})

// const express = require('express')
// const next = require('next')
//
// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()
//
// app.prepare()
// .then(() => {
//   const server = express()
//
  // server.get('/p/:id', (req, res) => {
  //   const actualPage = '/post'
  //   console.log('title', req.params.id)
  //   const queryParams = { title: req.params.id }
  //   app.render(req, res, actualPage, queryParams)
  // })
//
//   server.get('*', (req, res) => {
//     return handle(req, res)
//   })
//
//   server.listen(3000, (err) => {
//     if (err) throw err
//     console.log('> Ready on http://localhost:3000')
//   })
// })
// .catch((ex) => {
//   console.error(ex.stack)
//   process.exit(1)
// })
