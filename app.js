import express from 'express'

const app = express()


app.get('/', (req, res, next) => {
    res.send('Welcome from the internet!!')
})

app.listen(3000, () => console.log('App running ....'))