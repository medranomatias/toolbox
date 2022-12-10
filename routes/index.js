'use strict'

const express = require('express')
const router = express.Router()
const api = require('../src/api/FileServer')
const rest = require('../src/api/ExternalFileServer')

router.get('/files/data', (req, res, next) => {
  const server = new api.FileServer(new rest.ExternalFileServer())
  server.listFiles().then(files => {
    res.set('Content-Type', 'application/json; charset=utf-8')
    res.json(files)
  })
})

router.get('/files/list', (req, res, next) => {
  const server = new rest.ExternalFileServer()
  server.listFiles().then(files => {
    res.set('Content-Type', 'application/json; charset=utf-8')
    res.json(files)
  })
})

router.get('/', function (req, res) {
  res.render('index')
})

module.exports = router
