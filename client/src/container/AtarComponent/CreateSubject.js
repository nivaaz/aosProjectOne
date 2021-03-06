import React, {Component} from 'react'
import subData from '../../data/subName.json'
import _ from 'lodash'
/* This class is for the LHS selection of a subject &  mark */

export class CreateSubject extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null
        };
    }
    //this is dependant on the state 
    renderError (){
        if (!this.state.error) {return null;}
        return (
            <h3 className = "error">
            {this.state.error}
            </h3>
        );
    }
    render ( ){
        const renderOptions = subData.name.map((Name, index) =>
        <option key = {index}> {Name}   </option>
        );
         if(window.screen.width > 420){
            return (
                <form className = "formAdd" onSubmit={this.handleCreate.bind(this)} >
                   <div className = "markL" 
                            id="left">
                        <h2 className="title"> Add subject </h2>
                        <select name="subSelect" 
                                    type ="text" 
                                    placeholder = "Add subject"
                                    defaultValue="Standard English" 
                                    ref="createInput">
                                    { renderOptions }
                        </select>  
                    </div>
    
                    <div className = "markR"
                             id="right">
                        <h2 className="title">Add mark </h2>
                        <input name= "markInput" 
                                    id="markInput" 
                                    defaultValue='75' 
                                    type="number" 
                                    ref="createMark" 
                                    step="0.5"/>
                    </div> 
    
                    <div className = "buttonContainer">
                                <button id = "addButton" >
                                  <a>  <i className="fas fa-plus add"></i> </a>
                                </button> 
                                <h1> {this.state.error} </h1>
                    </div>
            </form>
            );
         }else {
            return (
                <form className = "formAdd" onSubmit={this.handleCreate.bind(this)} >
                   <div className = "addSubCont" >
                        <h2 className="title"> Add subject </h2>
                        <select name="subSelect" 
                                    type ="text" 
                                    placeholder = "Add subject"
                                    defaultValue="Standard English" 
                                    ref="createInput">
                                    { renderOptions }
                        </select>  
                    </div>
    
                    <div className = "addMarkCont">
                        <h2 className="title">Add mark </h2>
                        <input name= "markInput" 
                                    id="markInput" 
                                    defaultValue='75' 
                                    type="number" 
                                    ref="createMark" 
                                    step="0.5"/>
                    </div> 

                    <div className = "addButtonCont">
                                <button id = "addButton" >
                                  <a>  <i className="fas fa-plus add"></i> </a>
                                </button> 
                                <h1> {this.state.error} </h1>
                    </div>
            </form>
            );
         }
     }

     handleCreate(e){
        e.preventDefault(); //onsubmit default to refreshing page
                                    //this gets rid of this
        this.setState({error: null});   //inital set state
     
        console.log("subject value " + this.refs.createInput.value);
        console.log("mark value " + this.refs.createMark.value);
        
        const createInput = this.refs.createInput;
        const createMark = this.refs.createMark;
        const mark = createMark.value;
        const name = createInput.value;
        
        //run validatee function
        const validateInput = this.validateInput(name);
        //if function returns true
        if(validateInput){
            //gets set as the error
            this.setState ({error:validateInput }); //change state
            return;
        }
        //create new entry
        this.props.createSubject(name, mark); //check this takes in a mark
        this.props.scaleSubject(name, mark);
        this.refs.createInput.value =  ''; //clear the inputs
     }
    /*Validate function check if already added*/
    validateInput(name){
        if (!name){
            console.log("invalid1");
            return "Please choose a subject";
        }else if(_.find (this.props.subjects, subject =>subject.name === name)) {
            console.log("invalid2");
            return 'You already added this!';
        }else return null;
    }
}
export default CreateSubject  
/*anything needed
 to be used elsehwere needs to be exported*/