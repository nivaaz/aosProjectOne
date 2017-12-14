
import React, {Component} from 'react'
import AtarEstimate from './AtarComponent/AtarEstimate.js'
import SubjectsList from './AtarComponent/SubjectsList'
import List from './AtarComponent/List'
import CreateSubject from './AtarComponent/CreateSubject'
//import data from '../../../Data/subDat.json'
import data from '../../Data/subDat.json'
//some data to get started with
var testsub = [
    {name: "Aboriginal Studies", isCompleted: false, marks: "75", scaled: "35.9"},
    {name: "Drama", isCompleted: false, marks: "75", scaled: "45.2"},
    {name: "Chemistry", isCompleted: false, marks: "75", scaled: "42.0"},
    {name: "Ancient History", isCompleted: false, marks: "75", scaled: "43.9"},
    {name: "Agriculture", isCompleted: false, marks: "75", scaled: "44.1"}
]
export class ATAR extends Component {
    constructor(props){
        super(props);
        this.state = {
            subjects: testsub,
            atar : "Add more subjects"
        };
    }
     render ( ){
         return (
          <div>
            <div className = "partContainer" href="#CALC">
                <h1 className = "calcTitle">Atar Calculator</h1>
                <div className ="partition left">
                    <CreateSubject 
                        subjects = {this.state.subjects} 
                        marks={this.state.marks} 
                        createSubject = {this.createSubject.bind(this)}
                        scaleSubject = {this.scaleSubject.bind(this)}/>
                    <SubjectsList 
                        subjects = {this.state.subjects}
                        scaledMarks = {this.state.scaledMarks}
                        scaleSubject = {this.scaleSubject.bind(this)}
                        createSubject={this.createSubject.bind(this)}
                        saveSubject ={this.saveSubject.bind(this)}
                        toggleSubject = {this.toggleSubject.bind(this)}
                        deleteSubject = {this.deleteSubject.bind(this)}
                        updateATAR = {this.updateATAR.bind(this)}
                    />
                </div>
                <div className = "partition right">
                <AtarEstimate
                    subjects = {this.state.subjects}
                    updateATAR = {this.updateATAR.bind(this)}
                    atar = {this.state.atar}
                />
                </div>            
        </div>
        <List/> 
        <div className ="middle">   
           <button className = "estimate"> What is an ATAR </button>
            <button className = "estimate"> More on goal setting </button> 
            <button className = "estimate"> <i className="material-icons">arrow_downward</i> </button>
        </div>        
        </div>   
        );
     }
     // the bind makes sure the state is bound to this comp only
        toggleSubject (addedSub){
            const foundSubject = _.find(this.state.subjects, subject => subject.name === addedSub);
            foundSubject.isCompleted = !foundSubject.isCompleted;
            this.setState ({subjects : this.state.subjects});
        }
        scaleSubject (name, mark){
            var indexS = _.findIndex(data.subs, subject => subject.Course === name);
            console.log("index is "+ indexS);
            var index = _.findIndex(this.state.subjects, subject => subject.name === name);
            
            /*scale subjects & add to state*/
            fetch("http://localhost:5000/atar/scalesubject"+ "/" + indexS + "/"+ mark)
            .then(res => res.json()) //made json obj
            .then (res => {
                console.log("Scaled mark is "+res.mark)
                this.state.subjects[index].scaled = res.mark; //this take mark part of res
                this.setState({ subjects : this.state.subjects})  
            })
        }
     createSubject(name, mark){
         console.log("create sub & mark" + name + mark)
            this.state.subjects.push({
                name,
                isCompleted: false, 
                marks: mark,
                scaled: 0
            })
            this.scaleSubject(name, mark);
            this.setState({ 
                 subjects: this.state.subjects
            });
     }
        saveSubject (oldSubject, newSubject, newMark){
            const foundSubject = _.find(this.state.subjects, subject => subject.name === oldSubject);
            foundSubject.name = newSubject;
            foundSubject.marks = newMark;
            foundSubject.scaled = this.scaleSubject(newSubject, newMark);
            this.setState({ subjects: this.state.subjects})
        }
        deleteSubject(delName){
            //find the index of the subject and delete corrsp mark too 
            _.remove(this.state.subjects, subject =>subject.name === delName);
            this.setState({subjects : this.state.subjects});
        }
        /* ATAR */
        updateATAR(subjects){
            var i = 0 ;
             var sum = 0;
            var subjects=  _.sortBy(subjects, [function(o) { return o.scaled; }]);
            console.log("LOG")
            console.log( subjects)
             while (i <= 5){ /* units is less than 5 */
                 sum = parseFloat(sum) + parseFloat(subjects[i++].scaled);
             console.log ("sum "+ i +" "+ sum)
             }
             fetch("http://localhost:5000/atar/getatar"+ "/" + sum )
            .then(res => res.json()) //made json obj
            .then (res => {
                console.log(res.atar)
                this.state.atar = res.atar; //this take mark part of res
                this.setState({ atar : this.state.atar})    //updating state
            })
            //sort them from highest to lowest 
        }
}
export default ATAR
/*anything needed
 to be used elsehwere needs to be exported*/