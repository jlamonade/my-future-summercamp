const express = require('express')

// env var for deploy
const PORT = process.env.PORT || 3001
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
