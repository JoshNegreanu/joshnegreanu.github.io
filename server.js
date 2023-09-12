//include path, express, express-handlebars, and fs
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars')
var fs = require('fs')

//open port 3000
var app = express();
var port = process.env.PORT || 3000;

//set the main.handlebars template as the default page layout
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.json())

app.use(express.static('public'));

//homepage request function
app.get('/', function (req, res, next) {
  //send a 200 status code and render the twit container with all the twits in twitData.json
  //also show the createTwit button and modal
  res.status(200).render('home_page')
})

//twits/index page request function
/*
app.get('/twits/:twitNum', function (req, res, next) {
  //get the number of the twit specified in the url request
  var twitNum = req.params.twitNum

  //if the index of the twit is within the array of twits in twitData.json
  if (twitNum < twitData.length && twitNum >= 0) {
    //send a 200 status code and render the twit container with the specified twit from twitData.json
    //also don't show the createTwit button and modal
    res.status(200).render('twitContainer', {
      showCreateTwitModal: false,
      twits: {
        twit: twitData[twitNum]
      }
    })
  } else {
    next()
  }
});
*/

//invalid request function (page not found)
app.get('*', function (req, res) {
  //send a 404 status code and render the 404 body
  res.status(404).render('404')
});

app.listen(port, function () {
  console.log("server is listening on port", port);
});