import React, {Component} from 'react'

export class AddAtar extends Component {
    //usually set state in the topmost component?
    constructor(props ){
        super (props);
            this.state = {
            atar : 50        
            };
    }
    // calculateATAR(){
    //     const mark = this.props.subjects.marks;
    //     const atarInternal = _.sum(mark);
    //     this.setState({
    //         atar:atarInternal
    //     })
    render(){
        return (
            <div >
                <div className = "ATAR">
                    <div> 
                            <h1 className = "title"> Add ATAR Goal </h1>
                            <div className = "goalAtar">
                                <input 
                                className = "goalAtar"
                                type = "number"
                                min = "0"
                                max = "99.95"
                                step="0.05"
                                value = "80.55" />
                            </div>
                    </div>
                    <div>   
                            <button className = "estimate"> <i className="material-icons">arrow_downward</i> </button>
                    </div>        
                </div>
            </div>           
        )
     }
}
export default AddAtar