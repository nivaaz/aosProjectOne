 import React, {Component} from 'react'
 import SubjectListHeader from './SubjectListHeader.js'
import SubjectItem from './SubjectItem.js'
 import _ from 'lodash'

 /* This class is for the LHS selection of a subject &  mark */
export class SubjectList extends Component {
        renderSubjects (){

            const props = _.omit(this.props, 'subjects');

            //this will iterate through our subs & apply a function
            //returns a subject in html
            return _.map ( this.props.subjects , (subject, index) =>
                                     <SubjectItem key= {index} {...subject} {...this.props} />) ;
        } 
    render ( ){
     
         return (
           <div className = "subjectsAddedContainer">
               <SubjectListHeader />
                {this.renderSubjects()}
          </div>
         );
     }
}
export default SubjectList  
/*anything needed
 to be used elsehwere needs to be exported*/