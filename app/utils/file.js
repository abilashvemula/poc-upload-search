'use strict';

const fs = require('fs');
const path = require('path');
const Promise = require('bluebird');
const config = require('../../config/index');
const UPLOADS_DIR = path.resolve(config.UPLOADS_DIR);

function readUploadsDir() {
    return new Promise((resolve, reject) => {
        fs.readdir(UPLOADS_DIR, function(err, files) {
            if (err) {
                reject(err);
            }
            resolve(files)
        })

    })
};

function filterFilesByYear(year) {
    return readUploadsDir()
        .then(files => {
            const filteredFiles = files.filter(file => file.split('-')[0] === String(year));
            return filteredFiles;
        })
}

function filterFilesBySubject(subject) {
    return readUploadsDir()
        .then(files => {
            const filteredFiles = files.filter(file => file.split('.')[0].split('-')[1] === String(subject));
            return filteredFiles;

        })
}

function findFile (fileName) {
      return readUploadsDir()
        .then(files => {
            const filteredFiles = files.filter(file => file.split('.')[0] === String(fileName));            
            return filteredFiles;
        })
}



module.exports = {
    filterFilesByYear: filterFilesByYear,
    filterFilesBySubject: filterFilesBySubject,
    findFile: findFile
}
