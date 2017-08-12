import React, {Component} from 'react'
import SubjectsList from './AtarComponent/SubjectsList'
import CreateSubject from './AtarComponent/CreateSubject'

//import data from '../../Data/scaling.json'
//some data to get started with
const subjects = [
{
    name: "English", 
    isCompleted : true
},
{
    name: "Mathematics", 
    isCompleted : false
},
{
    name: "Economics", 
    isCompleted : true
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
            <header> 
                <h1 className = "title"> ATAR CALCULATOR</h1>
                <h3  className = "information"> Check out Art of Smart's newest goal setting tool, the ATAR Calculator!</h3>
                <h3  className = "information"> Print out your goal in the end  & stick it in your wall</h3>
            </header>

            <div className = "partContainer">
                <div className = "partition" id = "left">    
                    <h1 className = "title"> Add a subject </h1>

                    <CreateSubject subjects = {this.state.subjects} createSubject = {this.createSubject.bind(this)}/>
                    <input type="number" id="unitsMark" step="0.5"/>

                    <div className = "buttonContainer">
                        <i className="material-icons add">add</i>
                    </div>
                </div>

                <div className = "partition" id = "right">
                    <SubjectsList 
                    subjects = {this.state.subjects}
                    createSubject={this.createSubject.bind(this)}
                    saveSubject ={this.saveSubject.bind(this)}
                    toggleSubject = {this.toggleSubject.bind(this)}
                    deleteSubject = {this.deleteSubject.bind(this)}
                    />
                </div>
            </div>

                 <div className= "info">
                    <h2> You need to add 2 units </h2>
                </div>
                <div className = "buttonContainer">
                    <button className = "estimate"> Estimate ATAR</button>
                </div>
            <div className = "ATAR">
                <div> 
                        <h1 className = "title"> Estimated ATAR: </h1>
                        <h1 id = "estimated"> 85.95 </h1>
                </div>
                 <div>   
                        <button className = "estimate"> What is an ATAR </button>
                        <button className = "estimate"> More on goal setting </button> 
                        <button className = "estimate"> <i className="material-icons">arrow_downward</i> </button>
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
