const express = require('express')
const querystring = require('querystring')
const app = express()

app.use((req, res, next) => {
    let dataStr = ''
    req.on('data', team => {
        dataStr += team
    })
    req.on('end', () => {
        console.log(dataStr)
        const obj = querystring.parse(dataStr)
        console.log(obj)
        req.body = obj
        next()
    })
})

app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname })
})

app.post('/postdata', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

app.listen(3000, () => {
    console.log('跳转: http://127.0.0.1:3000')
})