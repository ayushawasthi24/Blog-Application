const express = require('express');
const { ensureAuthenticated } = require('../config/auth');
const Blog = require('../models/Blog');
const router = express.Router();

router.get('/', (req, res) => {

    Blog.find({}, (err, blog) => {
        res.render('homepage', {
            blog
        })
    });
});
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    var name = req.user.name;
    
    Blog.find({'author': name}, (err, blog) => {
        res.render('dashboard', {
            name: req.user.name,
            blog
        });
    });
    
});



router.post('/submit', (req, res) => {
    const { author, title, content} = req.body;
    let errors = [];

    if(!author || !title || !content) {
        errors.push({msg : 'Please fill in all the fields'});
    }

    if(errors.length >0) {
        res.render('dashboard', {
            name: req.user.name,
            errors,
            author,
            title,
            content
        })
    } else {
        const newBlog = new Blog({
            author,
            title,
            content
        });

        newBlog.save()
        .then(user => {
            req.flash('success_msg', 'Blog Submitted');
            res.redirect('/dashboard');
        })
        .catch(err => console.log(err));
    }
});

module.exports = router