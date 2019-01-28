const route=require('express').Router();
const fetch=require('node-fetch');
const fs=require('fs');


route.get('/' ,function(req,res,next){

    fetch('https://api.myjson.com/bins/1aghoo')
     .then(function(response){
         return response.json();
     })
        .then(function (data) {
            //res.send('ban gya');
            //console.log(data.section4.experiences[1].left);
            res.render('resume',data);
        })
        .catch(function(err){
            console.error(err);
        })

})

route.post('/',function (req,res,next) {

    let person={
        "name":req.body.name,
        "email":req.body.email,
        "phone":req.body.phone,
        "message":req.body.message
    };

    fs.appendFile("formData.txt",JSON.stringify(person),function (err) {
        if(err){
            console.error(err);
        }

        //console.log('saved the data');
    });
    res.redirect('/resume#contacts');

})




module.exports= route
