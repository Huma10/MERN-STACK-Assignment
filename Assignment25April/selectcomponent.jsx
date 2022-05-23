import React from 'react';
// use props to receive data from parent 
const SelectComponent=(props)=>{

    console.log(`Select component called...${props.dataSource}`);
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

    return(
        <select className='form-control' value={props.valueProperty}
         onChange={handleChange}>
            {
                props.dataSource.map((record,index)=>(
                    <option key={index} value={record}>{record}</option>
                ))
            }
        </select>
    );
};

export default SelectComponent;