import React from 'react';
import AddDepartmentComponent from './components/addcomponents';
import ListDepartmentsComponent from './components/listcomponents';

// Lets subscribe to the dispatch and store subscription

import {useDispatch,useSelector} from 'react-redux';

// import the action

import addDepartment from './actions/action';

const MainReduxComponent=()=>{

    // create a dispatch object that will dispatch the 'addDepartment' action method

    let dispatch = useDispatch();
    // subscribe to the store and receive data from it
    // state=>state.listDepartmentsReducer, this will query to the 
    // store to read data from it (to read data the query uses the reducer name which have updated the store)
    let depts = useSelector(state=>state.listDepartmentsReducer); 
  
    return (
        <div className='container'>
            {/* dispatch the action by passing it to the AddDepartmentComponent as props
            and receive the 'dept' object from it
             From the child AddDepartmentComponent, the 'dept' will be received
             and will be send to the addDepartment() action method using the dispatch
            */}
            <AddDepartmentComponent
             AddDepartment={(dept)=>dispatch(addDepartment(dept))}></AddDepartmentComponent>
            <hr/>
            <ListDepartmentsComponent departments={depts}></ListDepartmentsComponent>
        </div>
    );
};

export default MainReduxComponent;