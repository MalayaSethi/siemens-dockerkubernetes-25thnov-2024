const express = require('express')

const app = express()

app.get(
    '/',
    (req, res) => {
        res.end('welcome to message app')
    }
)

app.get('/welcome/:name', (req, res) => {
    const name = req.params.name
    res.send(
        `<html>
            <head>
                <meta charset='utf-8'>
                <meta name='viewport' content='width=device-width,initial-scale=1.0'>
                <title>Index</title>
            </head>
            <body>
                <h2>Welcome to Node JS with Docker & Kubernetes ${name}</h2>
            </body>
        </html>`
    ).status(200)
})

app.get('/error', (req, res) => {
    process.exit(1)
})
// app.listen(3000, () => console.log('server is running using port 3000'))
const PORT = process.env.PORT || process.env.DEFAULT_PORT
app.listen(PORT, () => {
    console.log('server running on http://localhost:' + PORT)
    console.log(process.env.NODE_VERSION)
    console.log(process.env.PATH)
    console.log(process.env.USER_NAME);
    console.log(process.env.PASSWORD);
}
)