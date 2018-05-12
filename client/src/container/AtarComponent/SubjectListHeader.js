import React, { Component } from 'react'
/* This class is for the LHS selection of a subject &  mark */
export class SubjectListHeader extends Component {
    render() {
        if (window.screen.width > 420) {
            return (
                <div className="headingCont">
                    <h1>Subjects Added </h1>
                    <h1>HSC</h1>
                    <h1>Scaled</h1>
                    <h1>Edit</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <h1 className="headingCont"> Subjects </h1>
                </div>
            )
        }
    }
}
export default SubjectListHeader
/*anything needed
 to be used elsehwere needs to be exported*/