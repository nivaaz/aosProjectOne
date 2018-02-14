import React, {Component} from 'react'
/**
 *promise.then(function(value) {
  // fulfillment
}, function(reason) {
  // rejection
});
 */

class Quiz extends Component {
    constructor(props){
        super(props);
        this.state = {
          name: [] 
        };
    }    
    render (){
         return (
            <div name ="quiz" className = "bodyCont">
                <div className = "questionBox"> 
                        <h1 className = "middle mainQ" >Do you have an ATAR goal?</h1>
                        <div className = "btnWrapper middle answers">
                            <button  id = "buttonNo" className = "addSubject">
                                <a href = "/atar">I do not know my goal.</a></button>
                            <button id = "buttonYes" className = "addSubject">
                                <a href="/reverse">
                                I know my goal!</a>
                                </button>
                            <button id = "buttonMaybe" className = "addSubject">
                                <a href="https://www.artofsmart.com.au/deconstructing-the-atar-how-to-understand-the-hsc-atars-and-uac/">
                                    What is an ATAR? </a></button>
                        </div>
                </div>
             </div>
         )
     };
     addfetch(res, Name){
        this.setState({
            name : this.state.name.push(res)
        })
        console.log("state now is " + this.state.name);

    }
}
/*This part is what gets rendered */
export default Quiz  
/*anything needed
 to be used elsehwere needs to be exported*/