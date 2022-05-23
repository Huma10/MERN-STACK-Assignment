import React from 'react';
import AddDepartmentComponent from './component/adddeptsagacomponent'
import ListDepartmentsComponent from './component/listdeptsagacomponent';

const MainReduxSAGAomponent2=()=>{
    return (
        <div className='container'>
            <AddDepartmentComponent></AddDepartmentComponent>
            <hr/>
            <ListDepartmentsComponent></ListDepartmentsComponent>
        </div>
    );
};

export default MainReduxSAGAomponent2;