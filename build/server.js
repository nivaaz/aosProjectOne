'use strict';

var _subDat = require('./data/subDat.json');

var _subDat2 = _interopRequireDefault(_subDat);

var _agg = require('./data/agg.json');

var _agg2 = _interopRequireDefault(_agg);

var _algos = require('./algos.js');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const scale = require(scaledSub)
var subs = _subDat2.default.subs;

var express = require('express');
var app = express();

// Serve static files from the React app
app.use(express.static(_path2.default.join(__dirname, '../client/build')));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
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

app.get('*', function (request, response) {
  response.sendFile(_path2.default.join(__dirname, '../client/build/index.html'));
});

/* starts and listens on 5000 */
var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('Example app listening on port 5000!');
});