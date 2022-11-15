require("dotenv").config()
const express = require("express")
const budgets = require("./models/budget")
const app = express()
const PORT = process.env.PORT
const methodOverride = require('method-override')


// MIDDLEWARE

// Allows for the use of css in the public folder
app.use('/static', express.static("public"))

// // Allows us to use the delete Method
app.use(methodOverride('_method'))




// HOME Route
app.get('/', (req, res) => res.redirect('/budgets/'))

// INDEX Route
app.get('/budgets/', (req, res) => {
    res.render(
        'index.ejs',
        {
            allBudgets:budgets
        }
    )
})

// NEW Route
app.get('/budgets/new', (req,res) => {
    res.render('new.ejs')
})

// CREATE Route
app.post('/budgets', (req, res) =>{
    budgets.push(req.body)

    res.redirect('/budgets')
})

// SHOW Route
app.get('/budgets/:index', (req,res) => {
    res.render('show.ejs', {
        budget: budgets[req.params.index],
        index: req.params.index
    })
})


// Port listening
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})