require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT


// HOME Route
app.get('/', (req, res) => res.redirect('/budgets'))

// INDEX Route
app.get('/budgets/', (req, res) => {
    res.render('index.ejs')
})



// Port listening
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})