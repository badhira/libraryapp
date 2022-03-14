const express=require('express');

const app  = express();
// setting view object
app.set('view engine','ejs');
app.set('views','./src/views');

app.get('/',function(req,res){
    res.render("index",{books});
});

app.listen(3000);