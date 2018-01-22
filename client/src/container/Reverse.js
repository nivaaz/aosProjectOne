import React, {Component} from 'react'
//import AtarEstimate from './AtarComponent/AtarEstimate.js'
import SubjectsList from './ReverseComponent/SubjectList'
//import List from './AtarComponent/List'
import CreateSubject from './ReverseComponent/CreateSubject'
import AddAtar from './ReverseComponent/AddAtar'
import data from '../data/subDat.json'
import _ from 'lodash'

//const stress = "https://www.artofsmart.com.au/categories/exam-and-study-skills/stress-management/";
//const resources = "https://www.artofsmart.com.au/hsc-resources/";

// //some data to get started with
// const subjects = [
// {
//     name: "Advanced English", 
//     isCompleted : true,
//     marks: 89
// },
// {
//     name: "Ext 1 English", 
//     isCompleted : true,
//     marks: 89
// },
// {
//     name: "Physics", 
//     isCompleted : true,
//     marks: 89
// },
// {
//     name: "Ext 1 Mathematics", 
//     isCompleted : true, 
//     marks: 89
// }
// ];

export default class Reverse extends Component {
    constructor(props){
        super(props);
        this.state = {
            subjects: [],
            atar : 1, 
            agg : 1
        };
    }

    /*index of sub in state*/
    /*you need to also pass in state: agg and subs*/
    addMark(subIndex, agg){
        var name = this.state.subjects[subIndex].name;
        var indexS = _.findIndex(data.subs, subject => subject.Course === name);
        var sub = this.state.subjects[subIndex];
        var scale = (agg/10).toFixed(0)
        var query = "/reverse/reverseScale/" + indexS + "/"+ scale
        /*scale subjects & add to state*/
        fetch(query)
        .then(res => res.json()) //made json obj
        .then (res => {
            console.log("hsc mark is "+ res.mark);
            // sub.scaled = agg/10; //this take mark part of res                    
            this.state.subjects[subIndex].hsc = res.mark.toFixed(0);
            this.setState({ subjects : this.state.subjects})  
        })
    }

    /* ATAR */
    addAtar(newATAR){
        console.log(newATAR);
        this.setState({
            atar: newATAR
        })
    } 
    addAgg(atar){
        fetch("/reverse/atartoagg/" + atar )
        .then(res => res.json()) //made json obj
        .then (res => {
            console.log("Agg"+res.agg)
            this.state.agg = res.agg; //this take mark part of res
            this.setState({ agg : this.state.agg})  
        })
    }

    /*updates all the subjects to a new agg*/
    updateMarks(agg){
        var i = 0;  
        for (i=0; i< this.state.subjects.length; i++){
            this.addMark(i, agg);
        }
        var subjects = this.subjects;
        for (i=0; i< this.state.subjects.length; i++){
            subjects[i].scaled = (agg/10).toFixed(0);
        }
        this.setState({ subjects : this.state.subjects})          
    }

    toggleSubject (addedSub){
        const foundSubject = _.find(this.state.subjects, subject => subject.name === addedSub);
        foundSubject.isCompleted = !foundSubject.isCompleted;
        this.setState ({subjects : this.state.subjects});
    }
    createSubject(name, agg){
        //if theres more than the min then sort subs by highest sclaed
        // then recalulate 
     console.log("create sub " + name)
     //scale subjects here

     this.state.subjects.push({
            name,
            hsc: 0,
            scaled: (agg/10).toFixed(0),
            isCompleted: false, 
        })
        // this.scaleSubject(name, mark);
        this.setState({ 
             subjects: this.state.subjects
        });
   }
    saveSubject (oldSubject, newSubject, newMark){
        const foundSubject = _.find(this.state.subjects, subject => subject.name === oldSubject);
        foundSubject.name = newSubject;
        // foundSubject.hsc = this.addMark(ind, agg); ??????
        var ind = _.findIndex(this.state.subjects, subject => subject.name === oldSubject);
        // foundSubject.scaled =(this.state.agg/10).toFixed(0);
        this.setState({ subjects: this.state.subjects})
    }
    deleteSubject(delName){
        //find the index of the subject and delete corrsp mark too 
        _.remove(this.state.subjects, subject =>subject.name === delName);
        this.setState({subjects : this.state.subjects});
    }

    render (){
        return (    
            <div>
                <h1 className = "calcTitle reverse">Reverse Atar Calculator</h1>
                <div className = "partContainer reverse" href="#CALC">
                    
                    <AddAtar 
                            /* needs to bind to state here! */
                            atar = {this.state.atar}
                            agg = {this.state.agg}
                            updateMarks = {this.updateMarks.bind(this)}
                            addAtar = {this.addAtar.bind(this)}
                            addAgg = {this.addAgg.bind(this)}
                    />

                    <div className = "partition left reverse">
                    <CreateSubject 
                            subjects = {this.state.subjects} 
                            marks={this.state.marks} 
                            createSubject = {this.createSubject.bind(this)}
                            addMark = {this.addMark.bind(this)}
                            agg = {this.state.agg}
                            />
                    </div> 
                    <div className ="partition right reverse">
                          <SubjectsList 
                            agg = {this.state.agg}
                            subjects = {this.state.subjects}
                            scaledMarks = {this.state.scaledMarks}
                            createSubject={this.createSubject.bind(this)}
                            saveSubject ={this.saveSubject.bind(this)}
                            toggleSubject = {this.toggleSubject.bind(this)}
                            deleteSubject = {this.deleteSubject.bind(this)}
                            />           
                    </div>
                </div>   
            </div>
        );
    }
}
/*anything needed
 to be used elsehwere needs to be exported*/