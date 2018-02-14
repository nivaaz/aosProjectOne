import React, {Component} from 'react'

export class AddAtar extends Component {
    //usually set state in the topmost component?
    constructor(props ){
        super (props);
        /*use props*/
    }
    
    render(){
        return (
            <div className = "ATAR reverse">
               {this.addAtar()}
               <p className = "info"> Add an ATAR goal and hit enter</p>
            </div>           
        )
     }
     handleChange(e){
        e.preventDefault(); //onsubmit default to refreshing page
         console.log(this.refs.goal.value)

        //this gets rid of this
        this.setState({error: null});   //inital set state
        console.log(this.refs.goal.value); // Added atar
        this.props.addAtar(this.refs.goal.value);       //adding to state  
        this.props.addAgg(this.refs.goal.value); 
        this.props.updateMarks(this.props.agg);
    }
    handleOnChange(e){
        e.preventDefault(); //onsubmit default to refreshing page
        if (this.refs.goal.value==null){
        return;
        }
        else if (this.refs.goal.value.length>= 3){
            console.log(this.refs.goal.value)
        this.setState({error: null});   //inital set state
        console.log(this.refs.goal.value); // Added atar
        this.props.addAtar(this.refs.goal.value);       //adding to state  
        this.props.addAgg(this.refs.goal.value); 
        this.props.updateMarks(this.props.agg);
        }
    }
    addAtar(){
        const atar = this.props.atar;

        /**
         * Have set colour in css to be used 
         * document.getElementById(elementname).classname = css value 
         * This will chamge the colour of the elem when you add it
         * add banner so that when you add in atar and it doesnt ompute it pops up 
         * like error for the atar ATAR end of thigns
         */
        return (
            <form  className = "addAtar" onSubmit =  {this.handleChange.bind(this)}/* on change update subjects if enough */>
                                        <div className = "goalAtar">
                                            <input 
                                            className="goalAtar"
                                             onChange = {this.handleOnChange.bind(this)}
                                            placeholder = "ATAR"
                                            ref="goal"
                                            type = "number"
                                            min = "0"
                                            max = "99.95"
                                            step="0.05"
                                            />
                                        </div>
                </form>

            )
        }   
    }
 
export default AddAtar