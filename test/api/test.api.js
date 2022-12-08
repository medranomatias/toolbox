const expect = require('chai').expect
const api = require('../../src/api/FileServer')
const stub = require('./stub.api')

describe('API', function () {
    it('test01xxx', async function() {
        const server = new api.FileServer(new stub.ExternFileServerNoneFile())
        expect([]).to.eql(await server.listFiles())
    })
    it('test02xxx', async function() {
        const server = new api.FileServer(new stub.ExternFileServerEmptyFile())
        expect([
            {
                file: "file1.csv",
                lines: [ ]
            }
        ]).to.eql(await server.listFiles())
    })
    it('test03xxx', async function() {
        const server = new api.FileServer(new stub.ExternFileServerManyFiles())
        expect([
            {
                file: "file1.csv",
                lines: [ 
                    {
                        "text" :"RgTya",
                        "number": 64075909,
                        "hex": "70ad29aacf0b690b0467fe2b2767f765"
                    }
                ]
            }
        ]).to.eql(await server.listFiles())
    })
    it('test04xxx', async function(){
        const server = new api.FileServer(new stub.ExternFileServerLessAttributeFile())
        expect([
            {
                file: "file1.csv",
                lines: [ ]
            }
        ]).to.eql(await server.listFiles())
    })
    it('test05xxx', async function(){
        const server = new api.FileServer(new stub.ExternFileServerMoreAttributeFile())
        expect([
            {
                file: "file1.csv",
                lines: [ ]
            }
        ]).to.eql(await server.listFiles())
    })
})
