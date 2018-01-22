import React, {Component} from 'react'
import SubjectListHeader from './SubjectListHeader.js'
import SubjectItem from './SubjectItem.js'
import _ from 'lodash'
 /* This class is for the LHS selection of a subject &  mark */
export class SubjectList extends Component {  
    constructor(props){
        super(props);
        this.state = {
            units: 0
        };
    }
    renderSubjects (){            
            return _.map ( this.props.subjects, (subject, index) => {
               /* const scaledMark = this.props.scaledMarks[index];*/
                return (
                    <SubjectItem key={index} /*scaledMark={scaledMark}*/ {...subject} {...this.props} />                    
                );
            } )                                           
    } 
        /*total number of units for ATAR = 10 */
    subjectsNeeded (){ 
     const numItem = this.props.subjects.length; //how many subjects
     const needed = 10 - 2*numItem; //assuming everything has 2 units
     if (needed > 0){ //you need to add subs
        return ( 
            <div className = "info">
                <p>
                    You need to add {needed} more units to estimate an ATAR. 
                </p>
              
            </div>
            );           
        }
    if (needed <= 0 ){
        this.props.updateATAR(this.props.subjects)
    }
    }
    render ( ){
         return (
           <div className = "subjectsAddedContainer">
               <SubjectListHeader/>
                {this.renderSubjects()}
                {this.subjectsNeeded()}
          </div>
         );
     }
}
export default SubjectList
/*anything needed
 to be used elsehwere needs to be exported*/