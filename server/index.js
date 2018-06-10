const express = require('express')
const next = require('next')
const axios = require('axios')
const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()
require('dotenv').config()

const main = async () => {
  await app.prepare()
  const server = express()
  server.get('/video-search', async (req, res) => {
    try {
      const result = await axios.get('https://s3-ap-southeast-1.amazonaws.com/ysetter/media/video-search.json')
      res.json(result.data)
    } catch (e) {
      res.json(e)
    }

  })
  server.get('*', (req, res) => handle(req, res))

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on ${process.env.BASE_URL}:${port}`)
  })
}

try {
  main()
} catch (e) {
  console.error(e)
}
