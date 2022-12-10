class FileContentParser {
    constructor(fileContent) {
        this.fileContent = fileContent
    }

    parse() {
        if(!this.fileContent) {
            return []
        }        
        this.lines =  this.fileContent.split(/\r?\n/)
        let header = this.lines.shift()
        this.attributes = header.split(",")        
        return this.lines.reduce((acc, curr, idx) => 
            this.parseLineContent(acc, curr, idx)
        , [])
    }
    
    parseLineContent(processedLines, contentLine) {
        let fields = contentLine.split(",")
        if(fields.length != this.attributes.length) {
            return processedLines
        }
        let obj = this.attributes.reduce((obj, property, index) => {
            this.parseAttribute(obj, property, fields[index])
            return obj
        },{})
        processedLines.push(obj)
        return processedLines
    }

    parseAttribute(object, attribute, value) {
        switch(attribute) {
            case 'file':
                break;
            case 'number':
                object[attribute] = Number(value)
                break;
            default:
                object[attribute] = value        
        }        
    }
}

class FileServer {
    
    constructor(externFileServer) {
        this.externFileServer = externFileServer
    }

    async listFiles(fileName = '') {
        const externServer = this.externFileServer
        let fileNames = await externServer.listFiles()        
        if(fileName) {
            fileNames = fileNames.filter(name => name == fileName)
        }
        const files = []        
        for(const fileName of fileNames) {            
            files.push({
                file: fileName,
                lines: (new FileContentParser(await externServer.retrieveContent(fileName))).parse()
            })
        }
        return files
    }
}
exports.FileServer = FileServer