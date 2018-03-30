var express = require('express');
var router = express.Router();
var skills_dal = require('../dal/skills_dal');

/* GET USERS LISTING */
router.get('/all', function(req, res, next) {
    skills_dal.getAll(function(err, result){
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('skills/skills_view_all', {skills: result});
        }
    })
});

router.get('/add/', function(req,res) {
    res.render('skills/skills_add');
});

router.get('/insert', function(req,res) {
    res.send("The skill name entered was " + req.query.skill_name);
});

module.exports = router;
