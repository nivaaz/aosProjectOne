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
app.get('/atar/scalesubject/:ind/:mark', function (req, res) {
  var ind = req.params.ind; //can't put in name?
  var mark = req.params.mark;
  // console.log(scaleSubject);
  /*access algos file and scale mark*/
  var scaled = (0, _algos.ScaleCourse)(ind, mark);
  res.send({ "mark": scaled });
});

/*Scale a single subjsct*/
app.get('/atar/getAtar/:agg', function (req, res) {
  var agg = req.params.agg; //can't put in name?
  var atar = (0, _algos.aggregateToAtar)(agg);
  res.send({ "atar": atar });
});
/****************************************** */

/*
Reverse
*/
/**aggregate to atar 
 * works
*/
app.get('/reverse/atartoagg/:atar', function (req, res) {
  var atar = req.params.atar; //can't put in name?
  var agg = (0, _algos.atarToAggregate)(atar);
  res.send({ "agg": agg });
});

//mark and subject to reverse scale
app.get('/reverse/reverseScale/:in/:mark', function (req, res) {
  var index = req.params.in; //can't put in name?
  var mark = req.params.mark;
  var nmark = (0, _algos.reverseScale)(index, mark);
  res.send({ "mark": nmark });
});