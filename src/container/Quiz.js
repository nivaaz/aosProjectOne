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
               <h1>  Goal Setting for HSC Students </h1>
             <div > 
                    <h1 > Question 1</h1>
                    <div className = "btnWrapper">
                        <button className = "btn_atar buttonYes">Option 1</button>
                        <button className = "btn_atar buttonMaybe">Option 2</button>
                        <button className = "btn_atar buttonNo">Option 3</button>
                    </div>
             </div>
             </div>
         )
     }
}/*This part is what gets rendered */
export default Quiz  
/*anything needed
 to be used elsehwere needs to be exported*/