import subData from '../../../Data/subDat.json'
import ranks from '../../../Data/agg.json'

var subs = subData.subs;

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

