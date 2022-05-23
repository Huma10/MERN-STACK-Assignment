import React from 'react';
// Import Router Object Model to define Route Table
import {Router, Routes, Route} from 'react-router-dom';
import LayoutComponent from './layoutcomponent';
import ListDepartmentsComponent from './listdepartmentscomponent';
import CreateDepartmentComponent from './createddepartmentcomponent';
import NotFoundComponent from './notfoundcomponent';
import EditDepartmentComponent from './editdepartmentcomponent';
import DeleteDepartmentComponent from './deletecomponent';
import CreateEmployeeComponent from './createemployeecomponent';
import ListEmpComponent from './listempcomponent';
import ListDeptComponent from './listdeptcomponent';
import ListEmployeesComponent from './listemployeescomponent';
import EditEmployeeComponent from './editemployeecomponent';
import DeleteEmployeeComponent from './deleteemployeecomponent';
const MainRouterComponent=()=>{
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
            <Route path="/" element={<LayoutComponent/>}>
                    <Route path="/dept" element={<ListDeptComponent />} />
                    <Route path="/list" element={<ListDepartmentsComponent />} />
                    <Route path="/employee" element={<ListEmpComponent />} />
                    <Route path="/employeelist" element={<ListEmployeesComponent />} />
                    <Route path="/create" element={<CreateDepartmentComponent />} />
                    <Route path="/create-employee" element={<CreateEmployeeComponent />} />

                    <Route path="/edit/:deptno" element={<EditDepartmentComponent />} />
                    <Route path="/edit-emp/:empno" element={<EditEmployeeComponent />} />
                    <Route path="/delete-emp/:empno" element={<DeleteEmployeeComponent />} />

                    <Route path="/delete/:deptno" element={<DeleteDepartmentComponent />} />
                    {/* Route with the Route Parameter */}
                    <Route path="*" element={<NotFoundComponent />} />
            </Route>
            </Routes>
        </div>
    );
};

export default MainRouterComponent;