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
     handleCreate(e){
        e.preventDefault(); //onsubmit default to refreshing page
        //this gets rid of this
        this.setState({error: null});   //inital set state
        console.log(this.refs.goal.value); // Added atar
        this.props.addAtar(this.refs.goal.value);       //adding to state  
        this.props.addAgg(this.refs.goal.value); 
        this.props.updateMarks(this.props.agg); 
    }
    addAtar(){
        const atar = this.props.atar;
        const atarStyle = {
            color: (atar == '50.45') ? 'grey' : 'pink', 
            cursor: 'pointer'
        }
        return (
            <form onSubmit = {this.handleCreate.bind(this)} className = "addAtar" /* on change update subjects if enough */onSubmit={this.handleCreate.bind(this)}>
                                        <div className = "goalAtar">
                                            <input
                                            styles= {atarStyle}
                                            ref="goal"
                                            type = "number"
                                            min = "0"
                                            max = "99.95"
                                            step="0.05"
                                            defaultValue = "50.45" />
                                        </div>
                </form>

            )
        }   
    }

export default AddAtar