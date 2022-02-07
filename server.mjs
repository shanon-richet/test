import express from 'express'
import cookieSession from 'cookie-session'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import cors from 'cors'
import pool from './config.mjs'

const app = express()
const port = process.env.port || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.static('dist'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

app.use(cookieSession({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}))

app.get('/', (req, res) => {
    res.send('<h1>welcome</h1>')
})

app.get('/api', (req, res) => {
    pool.query('select * from users;', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})
