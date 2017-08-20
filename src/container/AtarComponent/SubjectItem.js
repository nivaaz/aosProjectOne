 import React, {Component} from 'react'
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
            const { name, isCompleted } = this.props;
            const subjectStyle = {
                color: isCompleted ? '#52b76' : '#52b70',
                cursor: 'pointer'
            }

            if (this.state.isEditing){
                return (
                    <form onSubmit={this.onSaveClick.bind(this)}>
                            <div className = "addSubject">
                                <select type="text" defaultValue = {name} ref="editInput">
                                    <option > Standard English</option>
                                    <option > Advanced English</option>
                                    <option > ESL </option>
                                </select>
                                <input type="number" id="unitsMark" step="0.5"/>
                            </div>
                    </form>
                );
            }
            return (
                    <h3 className = "addedSubject" style = {subjectStyle}
                            onClick = {this.props.toggleSubject.bind(this, name)}>
                            {name}
                    </h3> 
            );
        }
        renderActionSection(){
        if (this.state.isEditing){
                return (
                 <div className ="editContainer"> 
                     <i onClick={this.onSaveClick.bind(this)} 
                        className="material-icons done">done</i>
                    <button className = "addSubject" id="cancel"
                     onClick = {this.onCancelClick.bind(this)}> Cancel </button>
                </div>
                );
            }
            return (
                 <div className ="editContainer" > 
                    <i  className = "addSubject" onClick={this.onEditClick.bind(this)}
                     className="material-icons edit">mode_edit</i>
                    <i className = "addSubject" onClick={this.props.deleteSubject.bind(this, this.props.name)}
                     className="material-icons remove">clear</i>
                </div>
            );
        }
     render ( ){
         return (
            <div>
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
        const newSub = this.refs.editInput.value;
        this.props.saveSubject(oldSub, newSub);
        this.setState({
                isEditing: false
        })
    }
}
export default SubjectItem  
/*anything needed
 to be used elsehwere needs to be exported*/