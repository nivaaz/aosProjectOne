import React, {Component} from 'react'

class Quiz extends Component {

     render (){
         return (
            <div>
            <nav>
                <a className = "navBarTitle">ATAR Calculator</a> 
                <a className = "navBarTitle">Reverse ATAR Calculator</a> 
                <a className = "navBarTitle">Art of Smart</a>   
             </nav>
               <h1 >  Goal Setting for HSC Students </h1>
             <div className = "QuestionBox"> 
                    <h1 >Do you have an ATAR goal?</h1>
                    <div className = "btnWrapper">
                        <button  id = "buttonNo" className = "addSubject">I do not know my goal.</button>
                        <button id = "buttonYes" className = "addSubject">I know my goal!</button>
                        <button id = "buttonMaybe" className = "addSubject">What is an ATAR?</button>
                    </div>
             </div>
             </div>
         )
     }
}/*This part is what gets rendered */
export default Quiz  
/*anything needed
 to be used elsehwere needs to be exported*/