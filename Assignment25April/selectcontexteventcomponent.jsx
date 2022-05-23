import React, {useContext} from 'react';
// Use DataContext to Subscribew data from it
import {DataContext} from '../../components/usingcontextassign26thApril/datacontext.jsx';
// use props to receive data from parent 
const SelectContextEventComponent=()=>{
 
    // subscribe to the data
    let subscribedContext = useContext(DataContext);
    console.log(JSON.stringify(subscribedContext));

    console.log(JSON.stringify(Object.keys(subscribedContext)));
    
               //                      SubscribedObject[Keys of the SubscribedObject][Index]                          
    let dataSource = subscribedContext[Object.keys(subscribedContext)[0]]; // values for the first parameter
    // Lets read event
    let eventCallback =  subscribedContext[Object.keys(subscribedContext)[1]];

    if(dataSource === undefined || dataSource.length === 0) {
        return (
            <div className='container alert alert-danger'>
                <strong>
                    No Data to Display
                </strong>
            </div>
        );
    }
    // onChange={(evt)=>eventCallback(evt.target.value)}
    // OnChange event of the select, the callback which is subscribed
    // from the DataContext will be invoked and
    // the callback function will be executed
    // which eventually update the state in the parent component
    return( 
      
        <select className='form-control' onChange={(evt)=>eventCallback(evt.target.value)} >
            {
                dataSource.map((record,index)=>(
                    <option key={index} value={record}>{record}</option>
                ))
            }    
        </select>
    );
};

export default SelectContextEventComponent;