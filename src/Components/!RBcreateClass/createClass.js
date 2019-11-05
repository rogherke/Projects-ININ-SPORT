import React, { Component } from 'react';
import '../rbFormalStyle/rbFormalStyle.scss';
import './createClass.scss';
import NormalNav from "../nav/normalNav";

class CreateClass extends Component{
    constructor(props) {
        super(props);
      }
    
      
    render(){
        return(
        <React.Fragment>
          < NormalNav/>
          <div className="container rb-createClass">
          <div className="row">
            <div className="col-12">
              <h3 className="text-center rb-session-title mt-5">
               開課程
              </h3>
              <div className="row">
              <div className="col-6">

              </div>
              <div className="col-6">
              
              </div>
              </div>
            
            
            </div>
            </div>
          </div>
    
          
          
                


        
        </React.Fragment>
        
        
        
        );
    }
}

export default CreateClass;