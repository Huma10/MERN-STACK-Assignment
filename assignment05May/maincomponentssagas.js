import React from 'react';
import AddDepartmentComponent from './components/adddeptsagacomponent'
import ListDepartmentsComponent from './components/listdeptsagacomponent';
import LoginUserSAGAComponents from './components/loginusersagacomponents'
import reducers from './reducers/reducer';
const MainReduxSAGAomponent=()=>{

    return (
        <div className='container'>
            <LoginUserSAGAComponents></LoginUserSAGAComponents>
            <AddDepartmentComponent></AddDepartmentComponent>
            <hr/>
            <ListDepartmentsComponent></ListDepartmentsComponent>
        </div>
    );
};

export default MainReduxSAGAomponent;