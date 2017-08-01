import React, {Component} from 'react'
/* This is for the header and footer of the page */
class Home extends Component {
     render ( ){
         return (
           <div>
            <header className= "headerContainer"> 
                <h1> ATAR CALCULATOR</h1>
                <h3> Something about ATAR calc</h3>
            </header>
                <div className = "reactContainer">
                    {this.props.children}
                </div>
                <footer className="contact">
                    <p> Contact us </p>
                </footer>
            </div>
         )
     }
}
export default Home