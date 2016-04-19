var express = require("express"),
    http = require("http"),
    mongoose = require("mongoose"),
    app = express(),
    bodyParser = require('body-parser');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    mongoose.connect('mongodb://localhost/assignment7');

    var LinksSchema = mongoose.Schema({
       "title": String,
       "url": String,
       "clicks": Number
    });

   var Links = mongoose.model("Links", LinksSchema);


   //http.createServer(app).listen(3000);
   app.listen(3000, function(){
     console.log('Listeninng on 3000');
   });

   app.get("/links", function(req,res){
     Links.find({}, function(err,links){
       if(err!== null){
         console.log("ERROR:" +err);
         return;
       }else{
         res.json(links);
       }
     });
   });

   app.post("/links", function(req,res){
     var newLink = new Links({"title":req.body.title, "url":req.body.url,"clicks":0});
     newLink.save(function(err, result){
       if(err !== null){
         console.log(err);
         res.send("ERROR");
       }else{
         Links.find({},function(err, result){
           if(err !== null){
             res.send("ERROR");
           }else{
             res.json(result);
           }
         });
       }
     });
   });

   app.get("/click/:title", function(req, res){
     var reqTitle = req.params.title;
     Links.findOneAndUpdate({"title":reqTitle}, {$inc:{"clicks":1}},function(err,links){
       if(err!== null){
         console.log("ERROR:" +err);
         return;
       }else{         
         res.redirect(links.url);
       }
     });
   });
