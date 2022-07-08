const express = require('express');
const router = express.Router();

const conn = require('../utils/dbconnect.js')

//show all publications
router.get('/api/publications', (req, res) => {
    let sql = "SELECT * FROM publications";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});
//show line chart
router.get('/api/sumpageend', (req, res) => {
    let sql = "SELECT publication_id ,(page_end)sumpage_end FROM `publications`WHERE page_end != 0 GROUP BY publication_id";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});
//show doughnut
router.get('/api/sumdocument', (req, res) => {
    let sql = "SELECT document_type, COUNT(document_type) sum_document FROM publications GROUP BY document_type";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});


//show single publications
router.get('/api/publications/:id', (req, res) => {
    let sql = "SELECT * FROM publications WHERE publication_id=" + req.params.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});


//add new publications
router.post('/api/publications', (req, res) => {
    let data = { authors: req.body.authors, title: req.body.title, year: req.body.year, source_title: req.body.source_title, volume: req.body.volume, issue: req.body.issue, art_no: req.body.art_no, page_start: req.body.page_start, page_end: req.body.page_end, page_count: req.body.page_count, cited_by: req.body.cited_by, doi: req.body.doi, link: req.body.link, affiliations: req.body.affiliations, authors_with_affiliations: req.body.authors_with_affiliations, index_keywords: req.body.index_keywords, publisher: req.body.publisher, document_type: req.body.document_type};
    let sql = "INSERT INTO publications SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        //results.message = "1 row inserted.";
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

//update publications
router.put('/api/publications/:id', (req, res) => {
    let sql = "UPDATE publications SET authors='" + req.body.authors + "', title='" + req.body.title + "', year='" + req.body.year + "', source_title='" + req.body.source_title + "', volume='" + req.body.volume + "' , issue='" + req.body.issue + "' , art_no='" + req.body.art_no + "' , page_start='" + req.body.page_start + "' , page_end='" + req.body.page_end + "' , page_count='" + req.body.page_count + "' , cited_by='" + req.body.cited_by + "' , doi='" + req.body.doi + "' , link='" + req.body.link + "' , affiliations='" + req.body.affiliations + "' , authors_with_affiliations='" + req.body.authors_with_affiliations + "' , index_keywords='" + req.body.index_keywords + "' , publisher='" + req.body.publisher + "' , document_type='" + req.body.document_type + "' WHERE publication_id=" + req.params.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

//Delete publications
router.delete('/api/publications/:id', (req, res) => {
    let sql = "DELETE FROM publications WHERE publication_id=" + req.params.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

module.exports = router;