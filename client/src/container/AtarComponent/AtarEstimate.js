import React, {Component} from 'react'
export class AtarEstimate extends Component {
    //usually set state in the topmost component?
    constructor(props ){
        super (props);
    }
    render(){
        return (
            <div >
                <div className = "ATAR">
                    <div> 
                            <h1 className = "title"> Estimated ATAR </h1>
                           {this.renderATAR()}
                    </div>
                    <div>   
                            <button className = "estimate"> <i className="material-icons">arrow_downward</i> </button>
                    </div>        
                </div>
            </div>           
        )
     }
     renderATAR(){
        if (typeof(this.props.atar) ===  'string'){
            return <p className= "info"> {this.props.atar} </p>
        }else {
            return <h1 id = "estimated" > {this.props.atar.toFixed(2)} </h1>
        }            
    }
}
export default AtarEstimate