import subData from '../../../Data/subDat.json'
import ranks from '../../../Data/agg.json'

var subs = subData.subs;

//subs.indexOf(subject[i])

/*
will check a string of subjects for the 
 */
/**
 * 
 * @param {*} subjects 
 */
function checkSubjects (subjects){
    //check there is enough units 
    //chec k catgeories
    // no more than 4 units for subject
}

/*returns marks for hsc or scaled 
depending on index provided */
function getMarks (index){
    var marks = [];
    marks.push(0);
    marks.push(subs[index].P25);
    marks.push(subs[index].P75);
    marks.push(subs[index].P90);
    marks.push(subs[index].P99);
    marks.push(subs[index].max);
    return marks;
 }

 /*
 index : index of the subject in subDat
 rawmark: input mark from form corsp subject
** Takes a single mark and scales it
 */
/**
 * 
 * @param {*} index 
 * @param {*} rawMark 
 */
function ScaleCourse(index, rawMark){
    var hsc = getMarks(index);    //index will hold hsc mark
    var scaled = getMarks(index+1);   //index + 1 will hold scaled mark 
    var raw = rawMark/2;
    if (rawMark/2 == hsc[hsc.length-1] || (rawMark/2 > hsc[hsc.length-1] )){
        return(scaled[scaled.length-1]);
    } 
    if (rawMark == 0){
        return 0;
    }
    /*iterate through array to find place*/
    var i = 1;
    while (i < hsc.length-1){
        /*equal to scaling pt*/
        if (rawMark == hsc[i]){
            return scaled[i]; //direct correlation
        }
        /*falls within range*/        
        if (rawMark <= hsc[i]){
            break; // go onto scale
        }
        i++;
    } //end while loop
    /*scaling algo*/ 
    var draw = (rawMark/2 - hsc[i] )/ (hsc[i] - hsc[i-1]);
    scaled = scaled[i] + (draw* (scaled[i] - scaled[i-1]));
    return scaled;
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
 * 
 * @param {*} agg 
 */
function aggregateToAtar (agg){
    var i = 0;
    while (i <= agg.Atar.length-1){
        if (agg == agg.Aggregate(i)){
            return agg.Atar[i];
        }
        //if in range
        if (agg > agg.Aggregate(i)){
            break;
        }
        i++; 
    }
    var datar = agg.Atar(i) - agg.Atar(i-1);
    var dscale = agg - agg.Aggregate(i);
    var atar = agg.Atar(i) + (dscale/50)*(datar);
     return atar ;
 }

function getSum(marks){
     var i = 0;
     var sum = 0;
     while (i < marks.length-1){
        sum += marks[i];
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
    return aggregateToAtar(agg);;
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
function atarToAggregate (atar){
    var i = 0;
    while (i <= agg.Atar.length-1){
        if (atar == agg.Atar(i)){
            return aggregateToAtar.Aggregate[i];
        }
        //if in range
        if (atar > agg.Atar(i)){
            break;
        }
        i++; 
    }
    var datar = agg.Atar(i) - agg.Atar(i-1);
    var dscale = atar - agg.Atar(i);
    var aggregate = agg.Aggregate(i) + (dscale/datar)*50;
    return aggregate ;
}
/**
 * take scaled mark
 * make it hsc mark 
 * 
 * @param {*} subject 
 * @param {*} mark 
 */
function reverseScale (index, mark){
    //find subject 
    var Scaled = getMarks(index);    //index will hold Scaled mark
    var HSC = getMarks(index+1);    //index will hold Scaled mark
    //finf where it sits in scaled
    if(mark == Scaled[0]){
        return HSC[0];
    }
    var i = 0 ;
    while (i <=HSC.length-1 ){
        if (mark == Scaled[i]) return HSC[i];
        if(mark < Scaled) break;
    i++;
    }
    var dmark = mark - Scaled[i-1];
    var dscale = Scaled[i] - Scaled[i-1];
    var dhsc = HSC[i] - HSC [i-1];

    return HSC[i-1] + (dmark/dscale) * dHSC;;
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
function reverseATAR (atar, subjects){
    //checks units 
    var agg = atarToAggregate(atar);
    var rough = agg/10;
    //divide agg by 10 
    reverseScaleArray (subjects, rough);
    //reverse scale subjects to this mark  
    
    //find the highest subejcts to match mark 
    
    //reorder subjects from highest marks to lowest 
    
    //return 
}
/**
 * 
 * @param {*} index 
 * @param {*} hscMark 
 */
function ScaleCourse(index, hscMark){
    var Scaled = getMarks(index);    //index will hold Scaled mark
    var hsc = getMarks(index+1);   //index + 1 will hold hsc mark 
    var  raw = hscMark/2;
    if (hscMark/2 == Scaled[Scaled.length-1] || (hscMark/2 > Scaled[Scaled.length-1-1] )){
        return(hsc[hsc.length-1]);
    } 
    if (hscMark == 0){
        return 0;
    }
    /*iterate through array to find place*/
    var i = 1;
    while (i < Scaled.length-1){
        /*equal to scaling pt*/
        if (hscMark == Scaled[i]){
            return hsc[i]; //direct correlation
        }
        /*falls within range*/        
        if (hscMark <= Scaled[i]{
            break; // go onto scale
        }
        i++;
    } //end while loop
    /*scaling algo*/
    var draw = (hscMark/2 - Scaled[i] )/ (Scaled[i] - Scaled[i-1]);
    mark = hsc[i] + (draw* (hsc[i] - hsc[i-1]));
    return mark;
}
