import React, {Component} from 'react'
import SubjectsList from './AtarComponent/SubjectsList'
import CreateSubject from './AtarComponent/CreateSubject'
//import data from '../../Data/scaling.json'
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
const stress = "https://www.artofsmart.com.au/categories/exam-and-study-skills/stress-management/";
const resources = "https://www.artofsmart.com.au/hsc-resources/";
export class ATAR extends Component {
    constructor(props){
        super(props);

        this.state = {
            subjects
        };
    }
     render ( ){
         return (
          <div>
            <div className = "partContainer">
                <div className = "partition" id = "left">
                    <CreateSubject subjects = {this.state.subjects} createSubject = {this.createSubject.bind(this)}/>
                      <div className= "ad">
                    <h3 > <a href={stress}>  Tips on dealing with school stress</a> </h3>
                      </div>
                      <div className= "ad">
                    <h3 > <a href={resources}></a> How to achieve Band 6s</h3>
                      </div>  
                </div>

                <div className = "partition" id ="right">
                  
                    <SubjectsList 
                    subjects = {this.state.subjects}
                    createSubject={this.createSubject.bind(this)}
                    saveSubject ={this.saveSubject.bind(this)}
                    toggleSubject = {this.toggleSubject.bind(this)}
                    deleteSubject = {this.deleteSubject.bind(this)}
                    />
            </div>
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

     createSubject(name){
            this.state.subjects.push({
                name,
                isCompleted: false 
            });
            this.setState({ subjects: this.state.subjects });
     }
        saveSubject (oldSubject, newSubject){
            const foundSubject = _.find(this.state.subjects, subject => subject.name === oldSubject);
            console.log(newSubject);
            foundSubject.name = newSubject;
                 this.setState({ subjects: this.state.subjects})
        }
        deleteSubject(delName){
            _.remove(this.state.subjects, subject =>subject.name === delName);
            this.setState({subjects : this.state.subjects});
        }
}
export default ATAR
/*anything needed
 to be used elsehwere needs to be exported*/