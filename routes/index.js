'use strict';

const express = require('express')
const router = express.Router()
const api = require('../src/api/FileServer')
const rest = require('../src/api/ExternalFileServer')

router.get('/files/data', (req, res, next) => {
    const server = new api.FileServer(new rest.ExternalFileServer())
    server.listFiles().then(files => {
        res.set('Content-Type', 'application/json; charset=utf-8');        
        res.json(files)
    })
})

module.exports = router