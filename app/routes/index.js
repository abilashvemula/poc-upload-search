'use strict';

const uploadCtrl = require('./upload');
const searchCtrl = require('./search');

module.exports = app => {
	app.use('/upload', uploadCtrl);
	app.use('/search', searchCtrl);
}