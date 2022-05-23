import React from "react";
import { render,unmountComponentAtNode } from "react-dom";
import ReactDOM from 'react-dom/client';
import {act} from 'react-dom/test-utils'

// import the componenet being tested
import DepartmentTestComponent from "../componentfortest/departmenttestcomponent";

//test suite and test cases
describe('Test Suit for the DepartmentTestComponent',()=>{
    //define a DOM Container, this will be created in memory with DOM
    let DOMContainer = null;
    let root = null;
    beforeEach(()=>{
        DOMContainer = document.createElement("div");
        document.body.appendChild(DOMContainer);
        //root =  ReactDOM.createRoot(DOMContainer)
    });

    //write the test cases
    it('when Save button is clicked, a new Department record is added into the table',()=>{
        act(()=>{
            render(<DepartmentTestComponent/>,DOMContainer);
        });
         // lets look for the button from the DOM
         const button = document.querySelector('.example');
         console.log(`button is ${button}`);
         // lets look for the element that is having class as 'table'
         const tableRows = document.querySelectorAll('tr');
        // lets dispatch the click event on button
         act(()=>{
             button.dispatchEvent(new MouseEvent("click", {bubbles:true}));
        });
            

         expect(tableRows.length).toBe(1);
    });
});