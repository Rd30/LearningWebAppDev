// Client-side code
/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, trailing: true */

// Server-side code
/* jshint node: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, trailing: true */
/*globals $:false,_:false*/
var express = require("express"),
    http = require("http"),
    flipCoin = require("./hw5_solu.js"),
    app = express();

    app.use(express.static(__dirName + "client"));
    http.createServer(app).listen(3000);

    app.get("/counts.json", function(req, res){
       res.json(flipCoin);
    });
