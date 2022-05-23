import React,{useState,useEffect,Fragment, Component} from 'react';
//ERROR-HANDLING ASSIGNMENT 29TH APRIL USING ERROR BOUNDARY
class ErrorBoundaryComponent extends Component{
    
    constructor(props){
        console.log(`is this called ${JSON.stringify(props)}`);
        super(props);
        this.state={
            errorMessage: "",
           
        }
        };
        
    //getDerivedStateFromError() - is used to render a fallback UI after an error is thrown.
    static getDerivedStateFromError(error){
        console.log(`e is ${error}`);
        return{            
            errroMessage:error.toString(),
        };
    }
    //componentDidCatch - is used to log the error information
    componentDidCatch = (error, log) => {
        console.log("====================================");
        console.log(error.toString(), log.componentStack);
        console.log("====================================");
      };
    // method to render the UI
    render(){
        if(this.state.errorMessage){
            return(
                <div className="container">
          <strong>              
            The Error Occurred in component
            <br />
            {this.state.errorMessage}
          </strong>
        </div>
            );
        }else{
            console.log(`is this called......1${this.state.errorMessage}`);
            return this.props.children; // It refers to component that we are actually rendering.
        }
    }  
}
export default ErrorBoundaryComponent;