import React from "react";
import { render,unmountComponentAtNode } from "react-dom";
import ReactDOM from 'react-dom/client';
import {act} from 'react-dom/test-utils'
import {fireEvent} from '@testing-library/react'

// import the componenet being tested
import EmployeeComponent from './../components/employeecomponents/employeeformcomponent'

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
    it('Display Validation message',()=>{
        act(()=>{
            render(<EmployeeComponent/>,DOMContainer);
        });
         const empNoInput = document.getElementsByName("EmpNo")[0];
         fireEvent.change(empNoInput,{
            target:{value:"-1"},
         });
         const empNoErrorMessage = 
         document.getElementsByClassName("alert-danger")[0];
         const expectedEmpNoErrorMessage = 
         "EmpNo MUST be +ve integer";
         expect(empNoErrorMessage).toBeTruthy();
         expect(empNoErrorMessage.innerHTML).toBe(expectedEmpNoErrorMessage);
    });
});