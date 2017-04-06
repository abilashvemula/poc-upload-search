'use strict';

const express = require('express');
const fs = require('fs');
const path = require('path')

const router = express.Router();
const multer = require('multer');
const config = require('../../config/index')
const UPLOADS_DIR = path.resolve(config.UPLOADS_DIR);

const upload = multer({ dest: UPLOADS_DIR });

router.route('/:year/:subject')
    .post(upload.single('file'), (req, res) => {

        const year = req.params.year;
        const subject = req.params.subject;

        /* File Details.. **/
        const originalName = req.file.originalname;
        const ext = originalName.slice((originalName.lastIndexOf(".") - 1 >>> 0) + 2);
        const newFileName = `${year}-${subject}.${ext}`;
        

        const oldPath = req.file.path;
        const newPath = path.join(req.file.destination, newFileName);

        fs.rename(oldPath, newPath, err => {
            if (err) {
                console.log('Please Check Your Upload File Paths', err)
            }
            res.json(req.file);
        })
    })

module.exports = router;
