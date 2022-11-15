const express = require("express")
const app = express()
const PORT = process.env.PORT


// Index Route
app.get('/', (req, res) => res.redirect('/budgets'))





// Port listening
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})