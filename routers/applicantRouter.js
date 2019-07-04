const routerSubject = require('express').Router()
const Model = require('../models')

// SUBJECT INFO
routerSubject.get('/', (req, res) => {      // menangkap URL subject
    Model.Subject.findAll({order:[['id','ASC']], include:[Model.Teacher]})
    // Model.Subject.findAll()
    .then(function(data){
      res.render('subject' , {subjectValue: data})
    })
    .catch(err =>{
        res.render(err)
    })
})
// SUBJECT INFO

// SUBJECT ADD DATA
routerSubject.get('/add', (req, res) => {
    Model.Subject.findAll()
    .then(function(data){
        // subjectValue = []
        // for(let i = 0 ; i < data.length ; i++){
        //     subjectValue.push(data[i])
        // }
        res.render('subjectAdd' , {subjectValue: data})
    })
    .catch(err =>{
        res.render(err)
    })
})

routerSubject.post('/add', (req, res) => {
    let subject = req.body
    let newDataFirstName = subject.subject_name
    Model.Subject.create({
      subject_name: newDataFirstName,
    })
    .then(function(){
      res.redirect('/subject')
    })
    .catch(err =>{
        res.render(err)
    })
})
// SUBJECT ADD DATA

// SUBJECT EDIT DATA
routerSubject.get('/edit/:id', (req, res) => {
    Model.Subject.findByPk(req.params.id)
    .then(function(data){
        res.render('subjectEdit' , {subject: data, id : req.params.id})
    })
})

routerSubject.post('/edit/:id', (req, res) => {
    let subject = req.body
    let newDataSubjectName = subject.subject_name
    Model.Subject.update({
        subject_name: newDataSubjectName,
    },{
        where: {id: req.params.id}
    })
    .then(function(data){
        res.redirect('/subject')
    })
    .catch(err =>{
        res.send(err.message)
    })
})
// SUBJECT EDIT DATA

// SUBJECT DELETE DATA
routerSubject.get('/delete/:id', (req,res) =>{
    Model.Subject.destroy({
        where:{
            id : req.params.id
        }
    })
    .then(()=>{
        res.redirect('/subject')
    })
    .catch((err)=>{
        res.send(err)
    })
})
// SUBJECT DELETE DATA

module.exports = routerSubject