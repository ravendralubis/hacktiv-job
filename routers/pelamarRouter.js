const express = require('express');

const Router = express.Router();

const {Applicant} = require('../models')

Router.get('/', (req, res) =>{
  Applicant.findAll({
    order: [
      ['id', 'ASC']
    ]
  })
  .then((data) => {
    res.render('applicantTable', {data:data})
  }).catch((err) => {
    res.send(err.message)
  });
})

Router.get('/register', (req, res) => {
  res.render('registerForm', {
    title : 'Title'
  })
})

Router.post('/register', (req, res) => {
  Applicant.create({
    name: req.body.name,
    password: req.body.password,
    age: req.body.age,
    job_wanted: req.body.job,
    salary_wanted: req.body.salary
  })
  .then((data) => {
    res.redirect('/pelamar')
  }).catch((err) => {
    res.send(err.message)
  });
})

Router.get('/delete/:id', (req, res) => {
  // res.send(req.params.id)
  Applicant.destroy({
    where: {id: req.params.id}
  })
  .then((data) => {
    res.redirect('/pelamar')
  }).catch((err) => {
    res.send(err.message)
  });
})

Router.get('/edit/:id', (req, res) => {
  Applicant.findOne({
    where: {id: req.params.id}
  })
  .then((data) => {
    res.render('editApplicant', {data:data, id:req.params.id})
  }).catch((err) => {
    res.send(err.message)
  });
})

Router.post('/editFix/:id', (req, res) => {
  // res.send(req.body)
  Applicant.update({
    name: req.body.name,
    age: req.body.age,  
    job_wanted: req.body.job,
    salary_wanted: req.body.salary,
    password: req.body.password
  }, {where: {id: req.params.id}})
  .then((result) => {
    res.redirect('/pelamar')
  }).catch((err) => {
    res.send(err.message)
  });
})

Router.get('/login', (req, res) => {
  res.render('loginApplicant')
})

Router.post('/login', (req, res) => {
  console.log(req.body);
  Applicant.findOne({
    where:{
      name: req.body.name,
      password: req.body.password
    }
  })
  .then((data) => {
    // console.log(data);
    if(data) {
      res.render('dashboard', {data:data})
    }
  }).catch((err) => {
    res.send(err)
  });
})

module.exports = Router