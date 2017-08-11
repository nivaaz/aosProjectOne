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
        return 
            <div style={{ color : 'red' }}>
            {this.state.error}
            </div>
        
    }
    render ( ){
         return (
            <form onSubmit={this.handleCreate.bind(this)} >
            <input type ="text" placeholder="Add a subject" 
                                ref="createInput"  />
            <button> Add </button>
            {this.renderError()}
            </form >
        );
     }

     handleCreate(e){
        e.preventDefault(); //onsubmit default to refreshing page
                                    //this gets rid of this
        const createInput = this.refs.createInput;
        const name = createInput.value;
        const validateInput = this.validateInput(name);
        
        if(validateInput){
            this.setState ({error:validateInput });
            return;
        }
        this.setState({error: null});

        console.log (this.refs.createInput.value); //returns your input IFF "value"
        this.props.createSubject(name);
        this.refs.createInput.value =  ' ';
     }
    validateInput(name){
        if (!name){
            return "Please choose a subject";
        } else if(_.find (this.props.subjects, subject =>subject.name === name)) {
            return "You already added this!";
        }else 
        return null;
    }
}
export default CreateSubject  
/*anything needed
 to be used elsehwere needs to be exported*/