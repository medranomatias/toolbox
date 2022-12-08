const expect = require('chai').expect
const api = require('../../src/api/FileServer')
const stub = require('./stub.api')
const rest = require('../../src/api/ExternalFileServer')

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
    it('test06xxx', async function(){        
        // should set the timeout of this test to 21600 ms; instead will fail
        this.timeout(21600);
        const server = new api.FileServer(new rest.ExternalFileServer())
        expect([
            {
               "file":"test1.csv",
               "lines":[
                  
               ]
            },
            {
               "file":"test2.csv",
               "lines":[
                  {
                     "hex":"5e0d4a007a8c9e666924b720b8bf48b6",
                     "number":904,
                     "text":"EelhFzpUFCcjxbvn"
                  }
               ]
            },
            {
               "file":"test3.csv",
               "lines":[
                  {
                     "hex":"32287bee9f45b7a4618b5ddc0ee0b75b",
                     "number":6807254,
                     "text":"oI"
                  },
                  {
                     "hex":"c0fc2a279c1922b23f2b6fb0961054e9",
                     "number":3,
                     "text":"CvAwtCGqAVcstVD"
                  },
                  {
                     "hex":"62de9b8211a0da62336ffc59e2a509a8",
                     "number":5,
                     "text":"bsMAaKs"
                  }
               ]
            },
            {
               "file":"test4.csv",
               "lines":[
                  
               ]
            },
            {
               "file":"test5.csv",
               "lines":[
                  
               ]
            },
            {
               "file":"test6.csv",
               "lines":[
                  {
                     "hex":"2e1c067b618fecc98e3d114941bbf30a",
                     "number":27,
                     "text":"vIFgolqXFZOaeYsiQqGYcAjvaqZpeDMT"
                  },
                  {
                     "hex":"bc3a57e617d87b8782f371928f59e22f",
                     "number":13257,
                     "text":"cLESyFwJ"
                  },
                  {
                     "hex":"31b91c47bd2a85ddd6c02e5f899e35ce",
                     "number":65,
                     "text":"lqzCmOQPaoOg"
                  },
                  {
                     "hex":"16bca06c6d50fe0abbce242c5f59f564",
                     "number":920798858,
                     "text":"oVy"
                  },
                  {
                     "hex":"1df42758f186f9c68c82a7971406bce9",
                     "number":13231476,
                     "text":"JdCPUedxLZHBQfKgrvUNtUrJNzT"
                  },
                  {
                     "hex":"7e5bee50eab1692330c69a3f5a3c7961",
                     "number":4,
                     "text":"ClRVthchpJbqccRQkCas"
                  },
                  {
                     "hex":"d35960bed8719179737501ecec08c8ad",
                     "number":76701,
                     "text":"CjPzmKMGgTzoutVnNqpLL"
                  }
               ]
            },
            {
               "file":"test9.csv",
               "lines":[
                  {
                     "hex":"7d244d3fd75a40b2a424798b3c88075e",
                     "number":9478167,
                     "text":"lnIcEvMSKsnzMmtwo"
                  },
                  {
                     "hex":"ba9764b53897475dad4c4344a608a39f",
                     "number":4,
                     "text":"TNiSWhMK"
                  },
                  {
                     "hex":"01ea07c1f4be544a9bb711eab2e0c545",
                     "number":5,
                     "text":"Dfspfxb"
                  },
                  {
                     "hex":"3135d152f12dc6a362b6ac3990491774",
                     "number":7267786691,
                     "text":"SphGEogdZpxiHHmrARfFLTCsChYa"
                  },
                  {
                     "hex":"42f78b21f0dc8a420ff4ad8133d22770",
                     "number":84404317,
                     "text":"AlvKKVKoTBZVpxAS"
                  },
                  {
                     "hex":"1ad2ef337e392a6d30bc8808d8a2d014",
                     "number":773997,
                     "text":"XQkVIyEOOWVUflImTKaNgys"
                  },
                  {
                     "hex":"cc5bb31c4b117927a0eab2d858ae5783",
                     "number":33,
                     "text":"eLuppWuwaWAObwhrFmhGxiZHBoL"
                  },
                  {
                     "hex":"1aacae6be154a2142bd022180511ada3",
                     "number":502988,
                     "text":"gutrf"
                  },
                  {
                     "hex":"4cb56bbab7a1a92c744a7ee58c47636f",
                     "number":425093033,
                     "text":"ooNHlIWJGbYdMJFMLeY"
                  }
               ]
            }
        ]).to.eql(await server.listFiles())
    })
})
