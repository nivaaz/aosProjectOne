import React, {Component} from 'react'
export class AtarEstimate extends Component {
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
                            <h1 className = "title"> Estimated ATAR </h1>
                            <h1 id = "estimated"> {55.6} </h1>
                    </div>
                    <div>   
                            <button className = "estimate"> <i className="material-icons">arrow_downward</i> </button>
                    </div>        
                </div>
            </div>           
        )
     }
}
export default AtarEstimate