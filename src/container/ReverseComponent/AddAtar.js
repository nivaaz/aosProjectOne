import React, {Component} from 'react'

export class AddAtar extends Component {
    //usually set state in the topmost component?
    constructor(props ){
        super (props);
        /*use props*/
    }
    // calculateATAR(){
    //     const mark = this.props.subjects.marks;
    //     const atarInternal = _.sum(mark);
    //     this.setState({
    //         atar:atarInternal
    //     })
    render(){
        return (
            <div className = "ATAR reverse">
                <div >
                            <h1 className = "title"> Add an ATAR Goal and hit enter</h1>
                            <form onSubmit = {this.handleCreate.bind(this)} className = "addAtar" /* on change update subjects if enough */onSubmit={this.handleCreate.bind(this)}>
                                <div className = "goalAtar">
                                    <input 
                                    ref="goal"
                                    className = "goalAtar"
                                    type = "number"
                                    min = "0"
                                    max = "99.95"
                                    step="0.05"
                                    defaultValue = "80.55" />
                                </div>
                            </form>        
                </div>
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
    }
    }

export default AddAtar