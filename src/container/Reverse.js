import React, {Component} from 'react'
import AtarEstimate from './AtarComponent/AtarEstimate.js'
import SubjectsList from './AtarComponent/SubjectsList'
import List from './AtarComponent/List'
import CreateSubject from './AtarComponent/CreateSubject'
import AddAtar from './ReverseComponent/AddAtar'

const stress = "https://www.artofsmart.com.au/categories/exam-and-study-skills/stress-management/";
const resources = "https://www.artofsmart.com.au/hsc-resources/";
//some data to get started with
const subjects = [
{
    name: "Advanced English", 
    isCompleted : true
},
{
    name: "Ext 1 English", 
    isCompleted : true
},
{
    name: "Physics", 
    isCompleted : true
},
{
    name: "Ext 1 Mathematics", 
    isCompleted : true
}
];

export class Reverse extends Component {
    constructor(props){
        super(props);
        this.state = {
            subjects
        };
    }
     render ( ){
        return (
            <div className = "partContainer reverse" href="#CALC">
                <div >
                    <h1 className = "calcTitle">Reverse Atar Calculator</h1>
                </div>
                <div className = "partition left reverse">
                  <AddAtar/>
                </div> 
                <div className ="partition right eeverse">
                      <CreateSubject subjects = {this.state.subjects} marks={this.state.marks} 
                                              createSubject = {this.createSubject.bind(this)}/>
                      <SubjectsList 
                          subjects = {this.state.subjects}
                          createSubject={this.createSubject.bind(this)}
                          saveSubject ={this.saveSubject.bind(this)}
                          toggleSubject = {this.toggleSubject.bind(this)}
                          deleteSubject = {this.deleteSubject.bind(this)}
                        />           
                </div>
          </div>   
          );
        }
        toggleSubject (addedSub){
            const foundSubject = _.find(this.state.subjects, subject => subject.name === addedSub);
            foundSubject.isCompleted = !foundSubject.isCompleted;
            this.setState ({subjects : this.state.subjects});
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
export default Reverse
/*anything needed
 to be used elsehwere needs to be exported*/