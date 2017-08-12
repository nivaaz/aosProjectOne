import React, {Component} from 'react'
/* This is for the header and footer of the page */
class Home extends Component {
     render ( ){
         return (
           <div>
            <header> 
                <h1 className = "title"> The Ultimate Goal Setting Tool</h1>
            </header>

                <div className = "reactContainer">
                    {this.props.children}
                </div>
            
            <footer >
                <p> Contact us </p>
                <p> info@artofsmart.com.au </p>
                <p> Facebook </p>
            </footer>
            
            </div>
         )
     }
}
export default Home