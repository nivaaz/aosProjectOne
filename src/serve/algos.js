import subData from '../../Data/subDat.json'
import ranks from '../../Data/agg.json'

var subs = subData.subs;
var agg = ranks.Aggregate;
var atar = ranks.Atar;

function checkSubjects (subjects){
    //check there is enough units 
    //chec k catgeories
    // no more than 4 units for subject
/*FLAGS */
var muse=0,music2=0, sor1=0, sor2=0, ser=0,
     mac=0, cro=0, indo=0, me1=0, me2=0, math=0; 
for (var  i = 0; i < length.subjects; i ++){
    if ( subject.name == "Music Extension") muse = 1; 
    if (subject.name == "Music 2") music2=1;
    if (subject.name == "Studies of Religion I") sor1=1;
    if (subject.name == "Studies of Religion II") sor2=1;
    if (subject.name =="Serbian") ser=1;
    if (subject.name =="Macedonian") mac=1;
    if (subject.name =="Croatian") cro=1;
    if (subject.name =="Indonesian Background Speakers") indo=1;
    if (subject.name = "Mathematics Extension 1") me1 = 1;
    if (subject.name = "Mathematics Extension 2") me2 = 1;
    if (subject.name = "Mathematics") math = 1;

    if (mac + serb + cro > 1){
        console.log( "Error, you can only do one of  Macedonian, Croatian or Serbian");
    }
   
    if (me1) {
        if (me2) {
            find(subjects, "Mathematics Extension 1").units =2;
        }
        else if (math){
            find(subjects, "Mathematics Extension 1").units = 1;
        }
    }
}
}

/*returns marks for hsc or scaled 
depending on index provided */
export function getMarks (index){
    console.log("Getting marks.");
    console.log("index is : "+  index)
    var marks = [];
    marks.push(0);
    marks.push(subs[index].P25);
    marks.push(subs[index].P75);
    marks.push(subs[index].P90);
    marks.push(subs[index].P99);
    marks.push(subs[index].max);
    return marks;
 }

/* scale mark 
@CourseName is the subject name corsp to file
@rawMark is crosp mark to be scaled */
/**
 * 
 * @param {*} Courses 
 * @param {*} Rawmarks 
 */
function scaleArray(Courses, Rawmarks){    
    var i=0 /*index of array*/
        , j=0; /* counter for courses */
    var scaledMark = []; // return 
    while (j <= Courses.length-1){
        i = Courses.indexOf(Courses[j]);
        scaledMark[j] = scaleCourse(i, RawMarks[j]);
        i = 0;
        j ++;
    }
    return scaledMark;
}

/* normal ATAR Scaling functions */
/**
 *  NEED TO IMPORT 
 * @param {*} agg 
 */
export function aggregateToAtar (agg){
    var i = 0;
    agg = agg*2;
    while (i < atar.length){
        if (agg == ranks.Aggregate[i]){
            return ranks.Atar[i];
        }
        //if in range
        if (agg > ranks.Aggregate[i]){
            break;
        }
        i++; 
    }
    var datar = ranks.Atar[i] - ranks.Atar[i-1];
    var dscale = agg - ranks.Aggregate[i]
    var atar = ranks.Atar[i] + (dscale/50)*(datar);
    console.log("ATAR: " + atar)
     return atar ;
 }

function getSum(marks){
     var i = 0;
     var sum = 0;
     while (i < marks.length-1){
        sum += marks[i++];
     }
     return sum;
 }
/* given the subjects and marks for each
 * finds the aggregate and then atar 
 * for the subject combination 
 */
/**
 * 
 * @param {*} subjects 
 * @param {*} marks 
 */
 function returnATAR(subjects, marks) {
    //check units
    //scale each subject 
    //scale to out of 50 
    var sMarks = scaleArray(subject, marks);
    //add all marks
    var agg = getSum(marks);
    //scale aggreate to ATAR
    //return atar
    return aggregateToAtar(agg);
}

/*
*
*
* REVERSE ATAR SCALING FUNCTIONS 
*
*
*
*/

/**
 * 
 * @param {*} atar 
 */
export function atarToAggregate (newAtar){
    var i = 0;
    if (newAtar == 99.95){
        return 500;
    }
    newAtar =parseFloat(newAtar)

    while (i <= atar.length -1){
        if (newAtar == atar[i]){
            return aggregateToAtar.Aggregate[i];
        }
        //if in range
        if (newAtar > atar[i]){
            break;
        }
        i++; 
    }
    var datar = atar[i-1] - atar[i];
    console.log(atar[i])
    var dscale = newAtar - atar[i];
    console.log(dscale)
    console.log(datar)
    var aggregate = agg[i] + (dscale/datar)*50;
    return aggregate ;
}
/**
 * take scaled mark
 * make it hsc mark 
 * 
 * @param {*} subject 
 * @param {*} mark 
 */
export function reverseScale (index, mark){
    //find subject 
    mark = mark/2;
    console.log(index +" "+ mark);
    var Scaled = getMarks(index);    //index will hold Scaled mark
    var index1 = ++index;
    var HSC = getMarks(index1);   //index + 1 will hold hsc mark 
    
    if(mark == Scaled[0]){
        return HSC[0];
    }
    var i = 0 ;
    while (i <HSC.length ){
        console.log(i)
        console.log(Scaled[i])
        if (mark == Scaled[i]) {
            console.log(" EXIT ONE")
            return HSC[i];
        }
        if(mark < Scaled[i]) {
            console.log(" EXIT TWO")
            break;
        }
    i++;
    }
    var dmark = mark-Scaled[i-1];
        console.log("dmark " +dmark);
        console.log( Scaled[i] + " " +  Scaled[i-1])
    var dscale = Scaled[i] - Scaled[i-1];
        console.log("dscale " +dscale);    
    var dhsc = HSC[i] - HSC [i-1];
        console.log(HSC[i]+" "+ HSC [i-1])
        console.log("dhsc " +dhsc);    
        console.log("HSC-1 " +HSC[i-1]);    
    
    return HSC[i-1] + (dmark/dscale) * dhsc;
}
/**
 * 
 * @param {*} subjects 
 * @param {*SINGULAR INT} mark 
 */
function reverseScaleArray(subjects, mark){
    var i = 0 ;
    var hsc = [];
    while (i <= subejcts.length-1){
       hsc[i] =  reverseScale(indexOf(subject[i]), mark);
    }
    return hsc;
}
/**
 * 
 * @param {*} atar 
 * @param {*} subjects 
 */
export function reverseATAR (atar, subjects){
    //checks units 
    var agg = atarToAggregate(atar);
    var rough = agg/10;
    //divide agg by 10 
    subjects = reverseScaleArray (subjects, rough);
    //reverse scale subjects to this mark  
    
    //find the highest subejcts to match mark 
    
    //reorder subjects from highest marks to lowest 
    
    return subjects; 
}
/**
 * 
 * @param {*} index 
 * @param {*} hscMark 
 */
export function ScaleCourse(index, hscMark){
    var Scaled = getMarks(index);    //index will hold Scaled mark
    var index1 = ++index;
    var HSC = getMarks(index1);   //index + 1 will hold hsc mark 
    var  raw = hscMark/2;
    console.log(HSC)
    console.log(Scaled)
        //is the max value
    if (raw == HSC[HSC.length-1] || (raw > HSC[HSC.length-1] )){
        return(Scaled[Scaled.length-1]);
    } 
    if (raw == 0){ 
        return 0;
    }
    /*iterate through array to find place*/
    var i = 1;
    while (i < (Scaled.length-1)){
        /*equal to scaling pt*/
        if (raw == HSC[i]){
            return Scaled[i]; //direct correlation
        }
        /*falls within range*/        
        if (raw < HSC[i]){
            break; // go onto scale
        }
        i++;
    } //end while loop
    /*scaling algo*/
    var dHSC = HSC[i] - HSC[i-1];
    var dscale =  Scaled[i] - Scaled[i-1] // this is getting rounded so it's buggy
/* Check this !! */
    if (dscale == 0 || dHSC == 0){
       dHSC = HSC[i-1] - HSC[i-2];
       dscale = Scaled[i-1] - Scaled[i-2];
       var draw = (raw - Scaled[i-1]);
   }

    var draw = (raw - HSC[i-1]);
    var scale = Scaled[i-1] + ((draw/dHSC) * dscale)
    // var dd =draw/dscale;
    // var mark = hsc[i] + (dd* (hsc[i] - hsc[i-1]));
    return scale.toFixed(1); //.toFixed(1)
}
/**
 * Math.ceil(4.4);     // returns 5 rounds up to nearest int
 */