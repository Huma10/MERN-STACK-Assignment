import React from 'react';
// Import Router Object Model to define Route Table
import {Router, Routes, Route} from 'react-router-dom';
import LayoutComponent from './layoutcomponent';
import ListDepartmentsComponent from './listdepartmentscomponent';
import CreateDepartmentComponent from './createddepartmentcomponent';
import NotFoundComponent from './notfoundcomponent';
import EditDepartmentComponent from './editdepartmentcomponent';
import DeleteDepartmentComponent from './deletecomponent';
import Layout2Component from './laypout2component';
const ExampleRouterComponent=()=>{
    return(
        <div className='container'>
            {/* <Routes>
                <Route path="/" element={<LayoutComponent/>}>
                    index is a property that represents that this is default UI
                    <Route index element={<ListDepartmentsComponent/>}/>
                    <Route path="/create" element={<CreateDepartmentComponent/>}/>
                    Route with the Route Parameter
                    <Route path="/edit/:deptno" element={<EditDepartmentComponent/>}/>
                    <Route path="/delete/:deptno" element={<DeleteDepartmentComponent/>}/>
                    <Route path="*" element={<NotFoundComponent/>}/>
                </Route>
            </Routes> */}
            <Routes>
            <Route path="/" element={<Layout2Component/>}>
                    index is a property that represents that this is default UI
                    <Route index element={<ListDepartmentsComponent/>}/>
                    <Route path="/create" element={<CreateDepartmentComponent/>}/>
                   
            </Route>
            </Routes>
        </div>
    );
};

export default ExampleRouterComponent;