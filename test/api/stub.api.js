class ExternFileServerNoneFile {
    constructor () {

    }

    async listFiles() {
        return []
    }

    async retrieveContent(fileName) {
        return ``
    }
}

class ExternFileServerEmptyFile {
    constructor() {

    }
    async listFiles() {
        return [
            "file1.csv"
        ]
    }
    async retrieveContent(fileName) {
        return ``
    }
}

class ExternFileServerManyFiles {
    constructor() {

    }
    async listFiles() {
        return [
            "file1.csv"
        ]
    }
    async retrieveContent(fileName) {
        return `file,text,number,hex
        file1.csv,RgTya,64075909,70ad29aacf0b690b0467fe2b2767f765`
    }
}

class ExternFileServerMoreAttributeFile {
    constructor() {

    }
    async listFiles() {
        return [
            "file1.csv"
        ]
    }
    async retrieveContent(fileName) {
        return `file,text,number,hex
        file1.csv,RgTya,64075909,70ad29aacf0b690b0467fe2b2767f765,70ad29aacf0b690b0467fe2b2767f765`
    }
}



class ExternFileServerLessAttributeFile {
    constructor() {

    }
    async listFiles() {
        return [ "file1.csv" ]
    }
    async retrieveContent(fileName) {
        return `file,text,number,hex
        file1.csv,RgTya,64075909`
    }
}

exports.ExternFileServerMoreAttributeFile = ExternFileServerMoreAttributeFile
exports.ExternFileServerLessAttributeFile = ExternFileServerLessAttributeFile
exports.ExternFileServerManyFiles = ExternFileServerManyFiles
exports.ExternFileServerNoneFile = ExternFileServerNoneFile
exports.ExternFileServerEmptyFile = ExternFileServerEmptyFile