import React, {Component} from 'react'
import SubjectsList from './SubjectsList'
import CreateSubject from './CreateSubject'
//import data from '../../Data/scaling.json'

//some data to get started with
const subjects = [
{
    name: "english", 
    isCompleted : true
},
{
    name: "maths", 
    isCompleted : false
}
];
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
                <h1> ATAR CALC </h1>
                <CreateSubject subjects = {this.state.subjects} createSubject = {this.createSubject.bind(this)}/>
                <SubjectsList 
                    subjects = {this.state.subjects}
                    createSubject={this.createSubject.bind(this)}
                    saveSubject ={this.saveSubject.bind(this)}
                    toggleSubject = {this.toggleSubject.bind(this)}
                    deleteSubject = {this.deleteSubject.bind(this)}
                 />
            </div>
         );
     }// the bind makes sure the state is bound to this comp only

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
