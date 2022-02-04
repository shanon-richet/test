import express from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import cors from 'cors'
import pool from './config.mjs'
const app = express()
const port = process.env.port || 5000

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
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
