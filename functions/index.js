const functions = require('firebase-functions');

const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
var app = next({ dev, conf: { distDir: "next" } })
const handle = app.getRequestHandler()

exports.next = functions.https.onRequest((req, res) => {
    app
        .prepare()
        .then(() => {
            const server = express()

            server.get('*', (req, res) => {
                res.set('X-Content-Type-Options', 'no')
                handle(req, res);
            })

            server.listen(5000, err => {
                if (err) throw err
                console.log('> Ready on http://localhost:5000')
            })
            return server(req, res);
        })
        .catch(ex => {
            console.error(ex.stack)
            process.exit(1)
        })
})

