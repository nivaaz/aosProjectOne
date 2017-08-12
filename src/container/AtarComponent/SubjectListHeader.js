 import React, {Component} from 'react'
/* This class is for the LHS selection of a subject &  mark */
export class SubjectListHeader extends Component {
     render ( ){
         return (
           <div className = "title">
                <h1> Subject </h1>
                <h1> Actions </h1>
            </div>
         );
     }
}
export default SubjectListHeader  
/*anything needed
 to be used elsehwere needs to be exported*/