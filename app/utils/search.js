'use strict';

const utils = require('./file')
const responseData = {
    list: []
};

function respond(files) {
    responseData.list = files;
    if (files.length) {
        responseData.message = undefined;
        return responseData;
    } else {
        responseData.message = "No Files Found";
        return responseData;
    }
}

function findByYear(year) {
    return utils.filterFilesByYear(year)
        .then(respond)
}

function findBySubject(subject) {
    return utils.filterFilesBySubject(subject)
        .then(respond)
}

function findFile(fileName) {
    return utils.findFile(fileName)
        .then(respond)
}

module.exports = {
    findByYear: findByYear,
    findBySubject: findBySubject,
    findFile: findFile
};