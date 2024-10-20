const express = require('express')
const app = express()
const server = require('http').Server(app)
const path = require('path')
const port = 80

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('dist'))
app.use('/metadata', express.static('metadata'))
app.use('/images', express.static('images'))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'), function(err) {})
})

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})