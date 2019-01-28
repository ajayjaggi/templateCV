const express=require('express');
const resumeRoute=require('./routes/resume')

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','hbs');
app.use('/public',express.static('public'));

app.use('/resume',resumeRoute);

app.get('/',function (req,res,next) {
    res.send('hi');

})

app.listen(8080);
