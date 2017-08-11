 import React, {Component} from 'react'
/* This class is for the LHS selection of a subject &  mark */
export class SubjectListHeader extends Component {
     render ( ){
         return (
           <thead>
                <tr>
                <th> Subject </th>
                <th> Actions </th>
                </tr>
            </thead>
         );
     }
}
export default SubjectListHeader  
/*anything needed
 to be used elsehwere needs to be exported*/