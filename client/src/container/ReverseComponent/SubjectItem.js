import React, {Component} from 'react'
import subData from '../../data/subName.json'
/* This class is for the LHS selection of a subject &  mark */
export class SubjectItem extends Component {
   //usually set state in the topmost component?
   constructor(props ){
       super (props);
           this.state = {
                   isEditing : false
           };
   }
       renderSubjectSection (){
           const {hsc,  name, scaled, isCompleted } = this.props;
           const subjectStyle = {
               color: isCompleted ? '#52b76' : '#52b70',
               cursor: 'pointer'
           }
           if (this.state.isEditing){
               const renderOptions = subData.name.map((Name, index) =>
               <option key = {index}> {Name}   </option>
               );
               return (
                   <form className="formedit" onSubmit={this.onSaveClick.bind(this)}>
                           <div className = "addSubject">
                               <select type="text" defaultValue = {name} 
                                   ref="createInput">
                               { renderOptions }
                               </select>
                           </div>
                   </form>
               );
           }
           return (
                   <div className = "addedcont" onClick = {this.props.toggleSubject.bind(this, name)}>
                        <h3 className = "addedSubject" >
                           {name}
                       </h3>   
                       <h3 className = "addedMark" >
                           {2*hsc}
                       </h3> 
                       <h3 className = "scaledMark" >
                           {2*scaled}
                       </h3>
                   </div> 
           );
       }
       renderActionSection(){
       if (this.state.isEditing){
               return (
                <div className ="editContainer"> 
                   <a>
                   <i onClick={this.onSaveClick.bind(this)} 
                       className="material-icons done">done</i> 
                   </a>
                   <a>
                   <i onClick = {this.onCancelClick.bind(this)}
                    className="material-icons cancel">close</i> 
                   </a>
               </div>
               );
           }
           return (
                <div className ="editContainer" > 
                  <a className = "addSubject"> <i  className = "addSubject" onClick={this.onEditClick.bind(this)}
                    className="material-icons edit">mode_edit</i></a>
                    <a className = "addSubject"><i className = "addSubject" onClick={this.props.deleteSubject.bind(this, this.props.name)}
                   className="material-icons delete">delete</i></a>
                   
               </div>
           );
       }
    render ( ){
        return (
           <div className = "subItem">
               {this.renderSubjectSection()}
               {this.renderActionSection()}
           </div>
       )
    }
   onEditClick (){
       this.setState ({isEditing:true});
   }
   onCancelClick (){
       this.setState ({isEditing : false});
   }
   onSaveClick(event){
       event.preventDefault();
       const oldSub = this.props.name;
       const newSub = this.refs.createInput.value;
       
       this.props.saveSubject(oldSub, newSub);
       this.setState({
               isEditing: false
       })
   }
}
export default SubjectItem  
/*anything needed
to be used elsehwere needs to be exported*/