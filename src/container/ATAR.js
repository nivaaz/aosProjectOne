
import React, {Component} from 'react'
import AtarEstimate from './AtarComponent/AtarEstimate.js'
import SubjectsList from './AtarComponent/SubjectsList'
import List from './AtarComponent/List'
import CreateSubject from './AtarComponent/CreateSubject'
//import data from '../../../Data/subDat.json'
import data from '../../Data/subDat.json'
//some data to get started with
export class ATAR extends Component {
    constructor(props){
        super(props);
        this.state = {
            subjects: [],
            scaledMarks: []
        };
    }
     render ( ){
         return (
          <div>
            <div className = "partContainer" href="#CALC">
                <h1 className = "calcTitle">Atar Calculator</h1>
                <div className ="partition left">
                    <CreateSubject subjects = {this.state.subjects} 
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
                    />
                </div>
                <div className = "partition right">
                <AtarEstimate/>
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
            fetch("http://localhost:5000/scalesubject"+ "/" + indexS + "/"+ mark)
            .then(res => res.json()) //made json obj
            .then (res => {
                console.log("Scaled mark is "+res.mark)
                const scaled = this.state.scaledMarks;
                scaled[index] = res.mark; //this take mark part of res
                console.log(scaled);
                this.setState({ scaledMarks : scaled})  
            })
        }
     createSubject(name, mark){
         console.log("create sub & mark" + name + mark)
         // var scaledMark = getscaledmark(name, mark)
            this.state.subjects.push({
                name,
                isCompleted: false, 
                marks: mark
                // scaledMark: scaledMark
            })
            this.setState({ 
                 subjects: this.state.subjects,
                 marks: this.state.marks 
            });
                 console.log("marks state" + this.state.marks)
     }
        saveSubject (oldSubject, newSubject, newMark){
            const foundSubject = _.find(this.state.subjects, subject => subject.name === oldSubject);
            foundSubject.name = newSubject;
            foundSubject.marks = newMark;
            this.setState({ subjects: this.state.subjects})
        }
        deleteSubject(delName){
            //find the index of the subject and delete corrsp mark too 
            _.remove(this.state.subjects, subject =>subject.name === delName);
            this.setState({subjects : this.state.subjects});
        }
        
}
export default ATAR
/*anything needed
 to be used elsehwere needs to be exported*/