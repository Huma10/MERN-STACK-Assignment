import React from 'react';
//import Select from react-slect librray
import Select from 'react-select';
// use props to receive data from parent 
const EmployeeSelectComponent=(props)=>{


    // lets write a method that will be used to emit the selected value from this component
    // to its parent 
    

    const handleChange=(evt)=>{
        // the selected option's value will be
        // passed to the props object's  getSelectedValue() method
        // the parent MUST Subscribe to this method  
        props.getSelectedValue(evt.target.value);
    };

    if(props.dataSource === undefined || props.dataSource.length === 0) {
        return (
            <div className='container alert alert-danger'>
                <strong>
                    No Data to Display
                </strong>
            </div>
        );
    }
 // console.log(`Props ${props.dataSource}`);
  
    return(
        <select className='form-control' 
         onChange={props.onSelect} multiple={props.isMultiSelect} name={props.name} >
            {
                props.dataSource.map((record,index)=>(
                    <option key={index} value={record}>{record}</option>
                ))
            }
        </select>
    );
  
};

export default EmployeeSelectComponent;