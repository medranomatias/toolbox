const https = require('https')

async function HttpGetRequest(url, headers = {}, callback) {
    return new Promise((resolve, reject) => {
        const req = 
        https.request(
            url, 
            { headers },
            res => {
                if (res.statusCode < 200 || res.statusCode >= 300) {
                  return resolve(``);
                }
          
                const data = [];
          
                res.on('data', chunk => {
                  data.push(chunk);
                });
          
                res.on('end', () => {
                    resolve(callback(Buffer.concat(data).toString()))
                });
            }
        );
        req.on('error', reject);
        req.end();
    })    
}

class ExternalFileServer {
    constructor() {

    }
    async listFiles() {
        return HttpGetRequest(
            "https://echo-serv.tbxnet.com/v1/secret/files",
            {
                authorization: "Bearer aSuperSecretKey",
                Accept: "application/json"
            },
            function(response) {
                let objResponse = JSON.parse(response)
                return objResponse.files
            }
        )
    }

    async retrieveContent(fileName) {
        return HttpGetRequest(
            `https://echo-serv.tbxnet.com/v1/secret/file/${fileName}`,
            {
                authorization: "Bearer aSuperSecretKey",
                Accept: "application/json"
            },
            function(response) {
                return response
            }
        )
    }
}

exports.ExternalFileServer = ExternalFileServer