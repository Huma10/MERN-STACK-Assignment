import React, { Component, useState } from "react";
import DepartmentAjaxComponent from "./departmentajaxcomponent";
// lets add a class component
class ErrorBoundaryComponentExample extends Component {
  constructor(props) {
    super(props);
    // define a state property
    this.state = {
      errorMessage: "",
    };
  }

  // read error message from child components
  // set the error received from child components to the
  // errorMessage state property
  static getDerivedStateFromError(error) {
    return {
      errorMessage: error.toString(),
    };
  }

  componentDidCatch = (error, log) => {
    console.log("====================================");
    console.log(error.toString(), log.componentStack);
    console.log("====================================");
  };

  // method to render the UI
  render() {
    if (this.state.errorMessage) {
      // return fallback UI
      return (
        <div className="container">
          <strong>
            The Error Occurred in Child component
            <br />
            {this.state.errorMessage}
          </strong>
        </div>
      );
    } else {
      // keep rendering Children components
      return this.props.children;
    }
  }
}

const MyComponent = () => {
  let [counter, updateCounter] = useState(0);
  const clickMe = () => {
    updateCounter(counter++);
  };

  const counterChecker = () => {
    return (
      <div className="container">
        <h2>The Child Component</h2>
        <div className="container">Current Counter Value is = {counter}</div>
        <button className="btn btn-danger" onClick={clickMe}>
          Click Me Till Collapse
        </button>
      </div>
    );
  };

  // Use a JavaScript mechanism to handle the error, the thrown error will be listen by the Error Boundary
  // Component

  if (counter > 10) {
    throw new Error("You are Collapsed.....");
  } else {
    return counterChecker();
  }
};

const ContainerComponentWithErrorBoundary = () => {
  const click = () => {
    alert("Primary");
  };
  return (
    <div className="container">
      <h1>The Container Component using Error Boundary</h1>
      {/* React Components will render Under the Error Boundary Component */}
      <ErrorBoundaryComponentExample>
        <DepartmentAjaxComponent></DepartmentAjaxComponent>
        {/* <MyComponent></MyComponent> */}
      </ErrorBoundaryComponentExample>
      <hr />
      <h6>Still the Container Component</h6>
      <button className="btn btn-primary" onClick={click}>
        Parent
      </button>
    </div>
  );
};

export default ContainerComponentWithErrorBoundary;