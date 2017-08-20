import React, {Component} from 'react'
/* This is for the header and footer of the page */
class Home extends Component {
     render ( ){
         return (
           <div>
            <header> 
                <h1 className = "title"> The Ultimate Goal Setting Tool</h1>
                <nav>
                    <h2><a href= "/">Home</a></h2>
                    <h2><a href="/reverse">Reverse Calculator</a></h2>
                    <h2><a href="/atar">ATAR Calculator</a></h2>
                     <h2><a href="/">Quiz</a></h2>
                </nav>
            </header>

                <div className = "reactContainer">
                    {this.props.children}
                </div>
            
            <footer >
                <a href="https://www.facebook.com/artofsmart/">
                    Like us on facebook </a>   
                <a href="https://www.artofsmart.com.au/">
                    Website </a>
            </footer>
            
            </div>
         )
     }
}
export default Home