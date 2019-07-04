const routerCompany = require('express').Router()
const Model = require('../models')

// HOME COMPANY
routerCompany.get('/', (req, res) => {
    Model.Company.findAll()
    .then(function(data){
      res.render('company' , {companyValue: data})
    })
    .catch(err =>{
        res.render(err)
    })
})
// HOME COMPANY

// DASHBOARD INFO
routerCompany.get('/dashboard', (req, res) => {
    Model.Company.findAll()
    .then(function(data){
        res.render('dashboardCompany' , {companyValue: data})
    })
    .catch(err =>{
        res.render(err)
    })
})
// DASHBOARD INFO

// LOGIN
routerCompany.get('/login', (req,res) =>{
    res.render('loginCompany')
})

routerCompany.post('/login', (req,res) =>{
    console.log('=======>>>>>>>>>>>>>>',req.body)
    Model.Company.findOne({
        where:{
            name: req.body.name,
            password: req.body.password
        }
    })
    .then(dataCompany =>{
        console.log(dataCompany, '<===================')
        if(dataCompany){
            res.render('dashboardCompany', {data:dataCompany})
        }
    })
    .catch(err =>{
        res.send(err)
    })
})
// LOGIN

// ADD DATA
routerCompany.get('/signup', (req, res) => {
    Model.Company.findAll()
    .then(function(data){
        res.render('signupCompany' , {companyValue: data})
    })
    .catch(err =>{
        res.render(err)
    })
})

routerCompany.post('/add',  (req, res) => {
    let company = req.body
    let newDataName = company.name
    let newDataDeskripsi = company.deskripsi
    let newDataJob = company.job_position
    let newDataSalary = company.salary
    let newPassword = company.password
    Model.Company.create({
        name: newDataName,
        deskripsi: newDataDeskripsi,
        job_position: newDataJob,
        salary: newDataSalary,
        password: newPassword
    })
    .then(function(){
        res.redirect('/company')
    })
    .catch(err =>{
        res.render(err)
    })
})
// ADD DATA

// EDIT DATA
routerCompany.get('/edit/:id', (req, res) => {
    Model.Company.findByPk(req.params.id)
    .then(function(data){
        res.render('companyEdit' , {company: data , id : req.params.id })
    })
    .catch(err =>{
        res.render(err)
    })
})
routerCompany.post('/edit/:id', (req, res) => {
    let company = req.body
    let newDataName = company.name
    let newDataDeskripsi = company.deskripsi
    let newDataJob = company.job_position
    let newDataSalary = company.job_position
    Model.Company.update({
        name: newDataName,
        deskripsi: newDataDeskripsi,
        job_position: newDataJob,
        salary: newDataSalary
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
// EDIT DATA

// DELETE DATA
routerCompany.get('/delete/:id', (req,res) =>{
    Model.Company.destroy({
        where:{
            id : req.params.id
        }
    })
    .then((data)=>{
        res.redirect('/company')
    })
    .catch((err)=>{
        res.send(err)
    })
})
// DELETE DATA

module.exports = routerCompany