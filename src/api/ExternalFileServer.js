const http = require('http')
const util = require('util')

const httpGetRequest = util.promisify(http.get)

class ExternalFileServer {
    constructor() {

    }
    async listFiles() {
        let res = await httpGetRequest("https://echo-serv.tbxnet.com/v1/secret/files", {
            headers : {
                authorization: "Bearer aSuperSecretKey"
            }
        })
        console.log(res)
        return res
    }
    async retrieveContent(fileName) {
        return `file,text,number,hex
        file1.csv,RgTya,64075909`
    }
}

exports.ExternalFileServer = ExternalFileServer