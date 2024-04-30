import { Stubs, FeatStubs } from '../stubs/stubs.js';
var express = require('express');
var router = express.Router();
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index', { 
  	title: 'Home',
  	msg: 'This sample template should help get you on your way.',
  	pageMainClass: 'pgHome',
	feat: FeatStubs
  });
}).get('/contact', (req, res, next) => {
	res.render('contact', { 
		title: 'Contact Us',
		msg: 'This sample template should help get you on your way.',
		pageMainClass: 'pgContact'
	});
}).get('/menu', (req, res, next) => {
	res.render('menu', { 
		title: 'Our Menu',
		msg: 'This sample template should help get you on your way.',
		pageMainClass: 'pgMenu',
		items: Stubs
	});
});

module.exports = router;
