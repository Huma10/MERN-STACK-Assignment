import React from 'react';
const ValidationSummaryComponent = (props) =>{

    return(
        <div className='container text-center'>
            <div className='alert alert-danger' hidden={props.dataSource}>
                         EmpNo MUST be +ve integer
            </div>
            <div className='alert alert-danger' hidden={props.dataSource}>
                         EmpNo MUST be 8 digits
            </div>
        </div>
    );
}
export default ValidationSummaryComponent;