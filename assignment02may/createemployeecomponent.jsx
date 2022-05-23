import react,{useState, Fragment} from 'react';
import {useNavigate} from 'react-router-dom';

import DepartmentService from '../../services/departmentservices';
import EmployeeService from '../../services/employeeservices'
// import the select component
import SelectComponent from './../resuablecomponents/selectcomponent'


const CreateEmployeeComponent=(props)=>{

    let [employee, setEmployee] = useState({empno:0, empname:'', designation:'',salary:0,deptno:0});
    
   
    const serv = new EmployeeService();
    const [message, setMessage] = useState("");
    // lets define a navigate object
    const navigate = useNavigate();



    const save= async ()=>{
         try {
            let response = await serv.postData(employee);
            setMessage('Add is Successful');
            // Navigate to the default page
            navigate("/employeelist");
         }catch(ex){
             setMessage(ex.message);
         }    
    };
    const clear=()=>{
        // reset department properties
        setEmployee({empno:0, empname:'', designation:'',salary:0,deptno:0});
    }

    return(
        <Fragment>
            <h1>{props.message} Employee</h1>
            <div className='form-group'>
                <label>EmpNo</label>
                <input type="text" value={employee.empno} onChange={(evt)=>setEmployee({...employee, empno:parseInt(evt.target.value)})} className="form-control"/>
            </div>
            <div className='form-group'>
                <label>EmpName</label>
                <input type="text" value={employee.empname} onChange={(evt)=>setEmployee({...employee, empname:evt.target.value})} className="form-control"/>
            </div>
            <div className='form-group'>
                <label>Designation</label>
                <input type="text" value={employee.designation} onChange={(evt)=>setEmployee({...employee, designation:evt.target.value})} className="form-control"/>
                 
            </div>
            <div className='form-group'>
                <label>Salary</label>
                
                <input type="text" value={employee.salary} onChange={(evt)=>setEmployee({...employee, salary:evt.target.value})} className="form-control"/>
            </div>
            <div className='form-group'>
                <label>DeptNo</label>
                
                <input type="text" value={employee.deptno} onChange={(evt)=>setEmployee({...employee, deptno:evt.target.value})} className="form-control"/>
            </div>
            <div className='form-group'>
                <input type="button" className='btn btn-warning' value="Clear"
                 onClick={clear}/>
                <input type="button" className='btn btn-success' value="Save" onClick={save}/>
            </div>
          
           
           
        </Fragment>
    );
};

export default CreateEmployeeComponent;