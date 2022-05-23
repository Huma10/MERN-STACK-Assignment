
import React, { Fragment, useState } from 'react';
// use props to receive data from parent 
const DatagridComponent = (props) => {

    console.log("propss", props);
    // lets write a method that will be used to emit the selected value from this component
    // to its parent 
    const onChange = (e) => {
        console.log("katruia", e);
        const html = e.target.innerHTML;
        //  console.log("jtmm", html);
        props.getData(html);
    };
    const onChangeName = (e) => {
        const name = e.target.innerHTML;
        props.getDataName(name);
    };
    const onChangeLocation = (e) => {
        const location = e.target.innerHTML;
        props.getDataLocation(location);
    };
    const onChangeCapacity = (e) => {
        const capacity = e.target.innerHTML;
        props.getDataCapacity(capacity);
    };
    
    const headers = Object.keys(props.dataSource);
    const data = Object.values(props.dataSource2);

    console.log("dataa", data);
    return (
        <Fragment>
            DATA GRID TABLE
            <table className='table table-bordered table-striped'>

                <thead>
                    <tr >
                        {

                            headers.map((header) => (
                                <th >{header}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {

                        data.map((dept, idx) => (
                            <tr key={idx}>

                                <td onInput={onChange} contenteditable='true'>{dept.deptno}</td>
                                <td onInput={onChangeName} contenteditable='true'>{dept.deptname}</td>
                                <td onInput={onChangeLocation} contenteditable='true'>{dept.location}</td>
                                <td onInput={onChangeCapacity} contenteditable='true'>{dept.capacity}</td>

                                <td>   
                                <input type="button" className='btn btn-warning' value="Delete" onClick={() => props.delete(dept.id)} />
                                </td>

                                <td><input type="button" className='btn btn-success' value="Update" onClick={() => props.update(dept.id)} /></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Fragment>
    )

};

export default DatagridComponent;