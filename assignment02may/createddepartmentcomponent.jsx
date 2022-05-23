import react,{useState, Fragment} from 'react';
import {useNavigate} from 'react-router-dom';

import DepartmentService from '../../services/departmentservices';
// import the select component
import SelectComponent from './../resuablecomponents/selectcomponent'


const CreateDepartmentComponent=(props)=>{

    let [department, setDepartment] = useState({deptno:0, deptname:'', location:'',capacity:0});
    
    const locations = ['Pune', 'Mumbai', 'Kolhapur', 'Nagpur', 'Nashik', 'Satara', 'Thane'];
    // const locations  =undefined;
    const capacities = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];
    const serv = new DepartmentService();
    const [message, setMessage] = useState("");
    // lets define a navigate object
    const navigate = useNavigate();



    const save= async ()=>{
         try {
            let response = await serv.postData(department);
            setMessage('Add is Successful');
            // Navigate to the default page
            navigate("/list")
         }catch(ex){
             setMessage(ex.message);
         }    
    };
    const clear=()=>{
        // reset department properties
        setDepartment({deptno:0, deptname:'', location:'',capacity:0});
    }

    return(
        <Fragment>
            <h1>{props.message} Department</h1>
            <div className='form-group'>
                <label>DeptNo</label>
                <input type="text" value={department.deptno} onChange={(evt)=>setDepartment({...department, deptno:parseInt(evt.target.value)})} className="form-control"/>
            </div>
            <div className='form-group'>
                <label>DeptName</label>
                <input type="text" value={department.deptname} onChange={(evt)=>setDepartment({...department, deptname:evt.target.value})} className="form-control"/>
            </div>
            <div className='form-group'>
                <label>Location</label>
              
                  <SelectComponent dataSource={locations} valueProperty={department.location}
                   getSelectedValue={(value)=>{setDepartment({...department, location:value})}}></SelectComponent>
            </div>
            <div className='form-group'>
                <label>Capacity</label>
                
                    <SelectComponent dataSource={capacities} valueProperty={department.capacity}
                     getSelectedValue={(value)=>{setDepartment({...department, capacity:parseInt(value)})}}></SelectComponent>
            </div>
            <div className='form-group'>
                <input type="button" className='btn btn-warning' value="Clear"
                 onClick={clear}/>
                <input type="button" className='btn btn-success' value="Save" onClick={save}/>
            </div>
          
           
           
        </Fragment>
    );
};

export default CreateDepartmentComponent;