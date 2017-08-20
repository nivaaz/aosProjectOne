import React, {Component} from 'react'
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
         return (
            <form onSubmit={this.handleCreate.bind(this)} >
               <div className = "markL" id="left">
                <h2 className="subtitle">Add subject </h2>
                   <select  type ="text" defaultValue="Standard English" 
                                 ref="createInput">
                         <option > Standard English</option>
                         <option > Advanced English</option>
                         <option > ESL </option>
                    </select>
                </div>
                <div className = "markR" id="right">
                    <h2 className="title">Add mark </h2>
                    <input id="markInput" defaultValue='75' type="number" ref="rawMark" step="0.5"/>
                </div>           
                <div className = "buttonContainer">
                            <button className = "addButton" ><i className="material-icons"> add </i></button>
                            {this.renderError()} 
                </div>
        </form>
        );
     }

     handleCreate(e){
        e.preventDefault(); //onsubmit default to refreshing page
                                    //this gets rid of this
        
        this.setState({error: null});   //inital set state
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
        console.log (this.refs.createInput.value); //returns your input IFF "value"
        this.props.createSubject(name);
        this.refs.createInput.value =  ' '; //clear the inputs
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