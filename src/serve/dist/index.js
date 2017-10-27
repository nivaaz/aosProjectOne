'use strict';

var _subDat = require('../../../Data/subDat.json');

var _subDat2 = _interopRequireDefault(_subDat);

var _agg = require('../../../Data/agg.json');

var _agg2 = _interopRequireDefault(_agg);

var _algos = require('./algos.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var subs = _subDat2.default.subs; //const scale = require(scaledSub)


var express = require('express');
var app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.send("The server is working!");
});

/* starts and listens on 5000 */
app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});

/**atar */
/*Scale a single subjsct*/
app.get('/scalesubject/:ind/:mark', function (req, res) {
  var ind = req.params.ind; //can't put in name?
  var mark = req.params.mark;
  // console.log(scaleSubject);
  /*access algos file and scale mark*/
  var scaled = (0, _algos.ScaleCourse)(ind, mark);
  res.send({ "mark": scaled });
});
//run something in the front end using 
//fetch (/thisurl)
//this connects to the back end at 
//app.get 
//which we send back a res : reponse 

/****************************************** */
function getMarks(index) {
  var marks = [];
  console.log(index + " " + subs[index][1] + " " + subs[index].P25);
  marks.push(0);
  marks.push(subs[index].P25);
  marks.push(subs[index].P75);
  marks.push(subs[index].P90);
  marks.push(subs[index].P99);
  marks.push(subs[index].max);
  return marks;
}