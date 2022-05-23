import React from "react";
import { render,unmountComponentAtNode } from "react-dom";
import ReactDOM from 'react-dom/client';
import {act} from 'react-dom/test-utils'
import {fireEvent} from '@testing-library/react'

// import the componenet being tested
import DepartmentValidationTestComponent from './../componentfortest/departmentvalidationtestcomponent'

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
            render(<DepartmentValidationTestComponent/>,DOMContainer);
        });
         const deptNoInput = document.getElementsByName("deptNo")[0];
         fireEvent.change(deptNoInput,{
            target:{value:"-1"},
         });
         const deptNoErrorMessage = 
         document.getElementsByClassName("alert-danger")[0];
         const expectedDeptNoErrorMessage = 
         "DeptNo should be positive";
         expect(deptNoErrorMessage).toBeTruthy();
         expect(deptNoErrorMessage.innerHTML).toBe(expectedDeptNoErrorMessage);
    });
});