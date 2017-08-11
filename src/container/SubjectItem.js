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
                color : isCompleted ? 'green' : 'red',
                cursor: 'pointer'
            }
            if (this.state.isEditing){
                return (
                        <td>
                        <form onSubmit={this.onSaveClick.bind(this)}>
                            <input type="text" defaultValue={name} ref="editInput"  />
                            </form>
                        </td>
                );
            }
            return (
                <td style = {subjectStyle}
                        onClick = {this.props.toggleSubject.bind(this, name)}>
                 {name}
                 </td> 
            );
        }
        renderActionSection(){
        if (this.state.isEditing){
                return (
                 <td> 
                    <button onClick={this.onSaveClick.bind(this)} > Save </button>
                    <button onClick = {this.onCancelClick.bind(this)}> Cancel </button>
                </td>
                );
            }

            return (
                 <td> 
                    <button onClick={this.onEditClick.bind(this)}> Edit </button>
                    <button onClick={this.props.deleteSubject.bind(this, this.props.name)}> Delete </button>
                </td>
            );
        }
     render ( ){
         return (
            <tr>
                {this.renderSubjectSection()}
                {this.renderActionSection()}
                </tr>
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