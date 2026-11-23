import express from 'express';
import cors from 'cors';

const app = express()


//basic configration 
app.use(express.json({limit: '16kb'}))
app.use(express.urlencoded({ extended: true, limit: '16kb' }))
app.use(express.static('public'))

// cors configration 
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT','PATCH','DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram', (req, res) => {
  res.send('Hello Instagram!')
})

export default app;