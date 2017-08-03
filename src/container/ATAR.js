import React, {Component} from 'react'
import data from '../../Data/scaling.json'
class ATAR extends Component {
    constructor() {
        super()
        this.state = {
                
        }
    }


     render ( ){
         return (
           <div>
            <section className="atarContainer">
              <div className="titleContainer">
                        <h3 className="markTitle"> Units </h3>
                        <h3 className="markTitle"> Raw Mark </h3>
                        <h3 className="markTitle"> HSC Mark </h3>
                        <h3 className="markTitle"> Scaled Mark </h3>
              </div>
            
            <div className="subjectContainer">
                    <div className="selectContainer">
                        <select id="english">
                            <option value="std"> Standard English</option>
                            <option value="Adv"> Advanced English</option>
                            <option value="ESL"> ESL </option>
                        </select>
                    </div> 

                     <div className="marksContainer">
                        <input type="number" id="unitsMark" step="0.5"/>
                        <input type="number" id="rawMark"/>
                        <input type="number" id="hscMark"/>
                        <input type="number" id="scaledMark"/> 
                    </div> 
            </div> 
                <div className="btnWrapper">
                        <button className="addSubject" type="button"> + </button> 
                </div>
            </section>
            </div>
         )
     }
}
export default ATAR
/*anything needed
 to be used elsehwere needs to be exported*/
