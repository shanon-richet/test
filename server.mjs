import express from 'express'
import cookieSession from 'cookie-session'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import cors from 'cors'
import pool from './config.mjs'

const app = express()
app.set('trust proxy', 1)

const port = process.env.port || 5000

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(express.static('dist'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

app.use(cookieSession({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    maxAge: 24 * 60 * 60 * 1000
}))

app.get('/', (req, res) => {
    res.send({
        'path': 'home'
    })
})

app.get('/api', (req, res) => {
    pool.query('select * from users;', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
})

app.listen(port, () => console.log('Example'))
