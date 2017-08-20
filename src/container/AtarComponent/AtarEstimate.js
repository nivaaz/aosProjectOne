import React, {Component} from 'react'

export class AtarEstimate extends Component {
    //usually set state in the topmost component?
    constructor(props ){
        super (props);
            this.state = {
            atar : 50        
            };
    }
render ( ){
         return (
            <div className = "middle">
                <div className = "ATAR">
                    <div> 
                            <h1 className = "title"> Estimated ATAR: </h1>
                            <h1 id = "estimated"> 85.95 </h1>
                    </div>
                    <div>   
                            <button className = "estimate"> What is an ATAR </button>
                            <button className = "estimate"> More on goal setting </button> 
                            <button className = "estimate"> <i className="material-icons">arrow_downward</i> </button>
                    </div>        
                </div>    
            </div>           
        )
     }
}
export default AtarEstimate