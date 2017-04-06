'use strict';

const express = require('express');
const router = express.Router();
const searchUtils = require('../utils/search')

router.route('/')
    .get((req, res) => {

        const year = req.query.year;
        const subject = req.query.subject;

        const isYearSearch = (year && (!subject));
        const isSubjectSearch = (subject && (!year));
        const isYearSubjectSearch = subject && year;

        if (isYearSearch) {
            searchUtils.findByYear(year)
                .then(resData => res.json(resData))
        } else if (isSubjectSearch) {
            searchUtils.findBySubject(subject)
                .then(resData => res.json(resData))
        } else if (isYearSubjectSearch) {
            const fileName = `${year}-${subject}`;
            searchUtils.findFile(fileName)
                .then(resData => res.json(resData))
        } else {
        	const resData = { list: [], message: 'Invalid Search Query'}
            res.json(resData)
        }
    })

module.exports = router;
