const router = require('express').Router()

const companyRouter = require('./companyRouter')
// console.log(status)

router.use('/company', companyRouter)


router.get('/', (req,res)=>{
    res.render('index')
})

router.get('/about', (req,res) =>{
    res.render('about')
})

router.get('/contact', (req,res) =>{
    res.render('contact')
})

// router.get('/signup', (req,res)=>{
//     res.render('signup')
// })

router.get('/login', (req, res)=>{
    res.render('login')
})

module.exports = router