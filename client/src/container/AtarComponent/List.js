import React, {Component} from 'react'
export class List extends Component {

render (){
    const stress = "https://www.artofsmart.com.au/categories/exam-and-study-skills/stress-management/";
    const resources = "https://www.artofsmart.com.au/hsc-resources/";
    return (
    <div className = "middle grid3">
    <div className= "ad">
        <h3 > <a href={stress}>  Tips on dealing with school stress</a> </h3>
    </div>
    <div className= "ad">
        <h3 > <a >Discover what you can become! 👩‍🚀 👨‍🚒🕵️‍👨‍💼👨‍⚕️ </a> </h3>
    </div>
    <div className= "ad">
        <h3 > <a href={resources}></a> How to achieve Band 6s</h3>
    </div>
    </div>
    );
    }
}

export default List