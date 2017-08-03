 import React, {Component} from 'react'

class Reverse extends Component {
     
     render ( ){
         return (
           <div>
           <header>
               <h1> Reverse ATAR Calc </h1>
           </header>
            <section className="atarContainer">             
            <div className="subjectContainer">
                    <div className="selectContainer">
                        <select id="english">
                            <option value="std"> Standard English</option>
                            <option value="Adv"> Advanced English</option>
                            <option value="ESL"> ESL </option>
                        </select>
                    </div>
                    </div> 
                    <div className="marksContainer">
                      <h4> marks go here </h4>
                    </div>
                    <div className="btnWrapper">
                        <button className="addSubject" type="button"> + </button> 
                    </div>
                <div>    
                    <input type="number" step="0.05" className="atarEstimate" />
                </div>
            </section>
            </div>
         )
     }
}
export default Reverse  
/*anything needed
 to be used elsehwere needs to be exported*/