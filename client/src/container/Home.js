import React, {Component} from 'react'

/* This is for the header and footer of the page */
class Home extends Component {
     render ( ){
         return (
               <div className="homeContainer">
                 <div className="background">
                </div>
                   <nav>
                        <h2><a href= "/"> <i className="fa fa-home" aria-hidden="true"></i></a></h2>
                        <h2><a href="/reverse"> <i className="fa fa-calculator" aria-hidden="true"></i>
                        <i className ="material-icons">subdirectory_arrow_left</i>
                                                                    </a></h2>
                        <h2><a href="/atar"><i className="fa fa-calculator" aria-hidden="true"></i></a></h2>
                         <h2><a href="/">Quiz</a></h2>
                    </nav>
                
                    <div className="reactContainer">
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