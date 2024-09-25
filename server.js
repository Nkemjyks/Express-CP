// requirements
const express = require ('express')
const pug = require('pug')
var path = require('path')

//my app
const app = express()
const port = 3000
app.listen(port,()=>{
})

//app settings
app.set('views','./views')
app.set('view engine','pug')

//functions
//confirm Monday to Friday,  from 9 to 17
const timeCheck = (req,res,next)=>{
    date = new Date()
    console.log(date.getDay())
    console.log(date.getHours())
    date.getDay()>0 && date.getDay()<6 && date.getHours()>=9 && date.getHours()<=17 ? res.status=200:res.status=503
    return next()

}



// spec ops functions
const home = (req,res)=>{
    
    res.status==200?res.render('home_view'):res.send(res.status)

}

const serv = (req,res)=>{
    
    res.status==200?res.render('serv_view'):res.send(res.status)

}

const contact = (req,res)=>{
    
    res.status==200?res.render('contact_view'):res.send(res.status)

}

//global operations
app.use(timeCheck)
app.use(express.static(path.join(__dirname, 'public')));

//spec ops
app.get('/(home)?', home)
app.get('/services',serv)
app.get('/contact',contact)

