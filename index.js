const fs = require('fs')

let createDirAsync = async (path, recursive = false) => {
    return new Promise((resolve, reject) => {
        fs.mkdir(path, {recursive: recursive}, (err) => {
            if (err) {
                return reject(err.message);
            }

            return resolve(path)
        })
    })
}

let removeDirAsync = async (path, recursive = false) => {
    return new Promise((resolve, reject) => {
        fs.rmdir(path, (err) => {
            if (err) {
                return reject(err.message);
            }

            return resolve(path)
        })
    })
}

let writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) {
                return reject(err.message);
            }

            return resolve(path)
        })
    })
}

let appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(path, data, (err) => {
            if (err) {
                return reject(err.message);
            }

            return resolve(path)
        })
    })
}

let readFileAsync = async (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, {encoding: 'utf-8'},(err, data) => {
            if (err) {
                return reject(err.message);
            }

            return resolve(data)
        })
    })
}

let removeFileAsync = async (path) => {
    return new Promise((resolve, reject) => {
        fs.rm(path, (err) => {
            if (err) {
                return reject(err.message);
            }

            return resolve(path)
        })
    })
}

let existAsync = async (path) => {
    return new Promise((resolve, reject) => {
        fs.stat(path, (err, stats) => {
            if (err == null) {
                return resolve(true)
            } else if (err.code === 'ENOENT') {
                return resolve(false)
            } else {
                reject(err.message)
            }
        })
    })
}

module.exports = { createDirAsync, removeDirAsync, writeFileAsync, appendFileAsync, readFileAsync, removeFileAsync, existAsync }
