const route=require('express').Router();
const fetch=require('node-fetch');
const fs=require('fs');


route.get('/' ,function(req,res,next){

    fetch('https://api.myjson.com/bins/dswp4')
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

    let form={
        "name":req.body.name,
        "email":req.body.email,
        "phone":req.body.phone,
        "message":req.body.message
    };

    if (!checkName(form.name)) {
        res.json({ "success": "false", "error": "Enter Valid Name" });
    } else if (!checkEmail(form.email)) {
        res.json({ "success": "false", "error": "Enter Valid Email" });
    } else if (!checkPhone(form.phone)) {
        res.json({ "success": "false", "error": "Enter Valid Phone Number" });
    } else {
        fs.appendFile('formData.txt', JSON.stringify(form), function(err) {
            if (err) throw err;
            //console.log('Saved!');
        });
        res.json({ "success": "true" });
    }

})
checkName = (name) => /^[a-zA-Z ]+$/.test(name);
checkPhone = (phone) => /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone);
checkEmail = (email) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);





module.exports= route
