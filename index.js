const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 5000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send({ message: 'Homepage!' })
})

app.get('/products', (req, res) => {
  res.send({ message: 'Product Page!' })
})

app.get('/about', (req, res) => {
  res.send({ message: 'About Page' })
})

app.get('/contact', (req, res) => {
  res.send({ message: 'Contact Page' })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
