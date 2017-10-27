//const scale = require(scaledSub)
import subData from '../../../Data/subDat.json'
import ranks from '../../../Data/agg.json'
import { ScaleCourse } from './algos.js'
var subs = subData.subs;

const express = require('express');
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', function(req, res){
  res.send("The server is working!");
});


/* starts and listens on 5000 */
app.listen(5000, function(){
  console.log('Example app listening on port 5000!');
});

/**atar */
/*Scale a single subjsct*/
app.get('/scalesubject/:ind/:mark', function(req, res){
  var ind = req.params.ind; //can't put in name?
  var mark = req.params.mark;
  // console.log(scaleSubject);
  /*access algos file and scale mark*/
  var scaled =  ScaleCourse(ind, mark);
  res.send( {"mark" : scaled});
});
//run something in the front end using 
//fetch (/thisurl)
//this connects to the back end at 
//app.get 
//which we send back a res : reponse 

/****************************************** */
function getMarks (index){
  var marks = [];
  console.log(index +" "+ subs[index][1] +" "+subs[index].P25)
  marks.push(0);
  marks.push(subs[index].P25);
  marks.push(subs[index].P75);
  marks.push(subs[index].P90);
  marks.push(subs[index].P99);
  marks.push(subs[index].max);
  return marks;
}

