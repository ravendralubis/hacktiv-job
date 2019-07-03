const routerCompany = require('express').Router();
const Model = require('../models')

// Company List
routerCompany.get('/', (req,res) => {
    Model.Company.findAll()
    .then(function(data){
        res.render('signupCompany', { listCompany:data })     // nama file ejs
    })
    .catch(err => {
        res.render(err)
    })
})
// Company List

// Company Register
routerCompany.get('/signup/company', (req,res) =>{
    Model.Company.findAll()
    .then(function(data){
        res.render('signUpCompany', { listCompay:data }) // nama file ejs
    })
})

routerCompany.post('/signup/company', (req, rest) => {
    let data = req.body
    let newName = data.name
    let newDeskripsi = data.deskripsi
    let newJob_position = data.job_position
    let newSalary = data.salary
    Model.Company.Create({
        name: newName,
        deskripsi: newDeskripsi,
        job_position: newJob_position,
        salary: newSalary
    })
    .then(() => {
        res.redirect('/company')
    })
    .catch(err => {
        res.send(err)
    })
})
// Company Register

// Company Edit Data
routerCompany.get('/editData/:id', (req, res) => {
    Model.Company.findByPk(req.params.id)
    .then(function(data){
      res.render('companyEdit' , {company: data, id : req.params.id})
    })
    .catch(err =>{
        res.render(err)
    })
})

routerCompany.post('/editData/:id', (req, res) => {
    let company = req.body
    let newName = company.first_name
    let newDeskripsi = company.deskripsi
    let newJob_position = company.job_position
    let newSalary = company.salary
    Model.Company.update({
        name: newName,
        deskripsi: newDeskripsi,
        job_position: newJob_position,
        salary: newSalary
    },{
        where: {id: req.params.id}
    })
    .then(function(data){
        res.redirect('/company')
    })
    .catch(err =>{
        res.send(err.message)
    })
})
// Company Edit Data

// Company Delete Data
routerCompany.get('/delete/:id', (req,res) =>{
    Model.Company.destroy({
        where:{
            id : req.params.id
        }
    })
    .then(()=>{
        res.redirect('/company')
    })
    .catch((err)=>{
        res.send(err)
    })
})
// COMPANY DELETE DATA



module.exports = routerCompany