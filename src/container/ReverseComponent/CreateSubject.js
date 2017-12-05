/**
 * 
 *  revese atar calc
 * 
 */
import React, {Component} from 'react'
import subData from '../../../Data/subName.json'

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
         return (
            <form className = "formAdd" onSubmit={this.handleCreate.bind(this)} >
               <div className = "markL" 
                        id="left">
                    <h2 className="title"> Add subject </h2>
                    <select name="subSelect" 
                                type ="text" 
                                defaultValue="Standard English" 
                                ref="createInput">
                                { renderOptions }
                    </select>  
                </div>

                <div className = "buttonContainer">
                            <button id = "addButton" >
                              <a>  <i className="material-icons add"> add </i> </a>
                            </button> 
                            <h1> {this.state.error} </h1>
                </div>
        </form>
        );
     }

     handleCreate(e){
        e.preventDefault(); //onsubmit default to refreshing page
                                    //this gets rid of this
        this.setState({error: null});   //inital set state
     
        console.log("subject value " + this.refs.createInput.value);
        
        const createInput = this.refs.createInput;
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
        this.props.createSubject(name, this.props.agg); //check this takes in a mark
        this.props.addMark(this.props.subjects.length-1, this.props.agg); 
//        this.props.scaleSubject(name, mark);
        this.refs.createInput.value =  ''; //clear the inputs
     }
    /*Validate function check if already added*/
    validateInput(name){
        if(this.props.agg == 1){
            console.log("invalid 0")
            return "Opps! You need to add an atar"
        }
        if (!name){
            console.log("invalid1");
            return "Whoops! Please choose a subject";
        }else if(_.find (this.props.subjects, subject =>subject.name === name)) {
            console.log("invalid2");
            return 'Looks like we have this one!';
        }else return null;
    }
}
export default CreateSubject  
/*anything needed
 to be used elsehwere needs to be exported*/