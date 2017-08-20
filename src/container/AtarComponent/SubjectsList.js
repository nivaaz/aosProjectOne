 import React, {Component} from 'react'
 import SubjectListHeader from './SubjectListHeader.js'
import SubjectItem from './SubjectItem.js'
import AtarEstimate from '../AtarComponent/AtarEstimate.js'
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
        this.setState({
            units: 2*(this.props.subjects.length)
          });
            
        const props = _.omit(this.props, 'subjects');
            //this will iterate through our subs & apply a function
            //returns a subject in html
            return _.map ( this.props.subjects , (subject, index) =>
                                     <SubjectItem key= {index} {...subject} {...this.props} />) ;                         
        } 
        estimateATAR( ){
        //if subs DONT need to be added 
        if (!this.subjectsNeeded()){
            console.log("subjectsNeeded");
            return (
               <AtarEstimate/>
            );
        }
    }
        /*total number of units for ATAR = 10 */
    subjectsNeeded (){ 
     const numItem = this.props.subjects.length; //how many subjects
     const needed = 10 - 2*numItem; //assuming everything has 2 units
     if (needed > 0){ //you need to add subs
        return ( 
            <div className = "info">
                    You need to add {needed} more units to estimate an ATAR 
            </div>
            );           
        }
    else{
        this.setState({units:10});
        return null;       
    }       
    } 
    calcATAR (){
        if (this.props.units >= 10){
            return 
        }
    }
    render ( ){
         return (
           <div className = "subjectsAddedContainer">
               <SubjectListHeader />
                <div>
                {this.renderSubjects()}
                {this.subjectsNeeded()}
                <div className = "ATAR">
                    {this.estimateATAR()}
                </div>
                <div className = "middle">
                    {this.calcATAR()}
                </div>
               </div>
          </div>
         );
     }
}
export default SubjectList  
/*anything needed
 to be used elsehwere needs to be exported*/