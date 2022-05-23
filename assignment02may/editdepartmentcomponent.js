import react,{useState, Fragment, useEffect} from 'react'; 
// import hooks to read the parameters from the Route Link and navigate after saving the data
import {useParams, useNavigate} from 'react-router-dom';

import DepartmentService from '../../services/departmentservices';
// import the select component
import SelectComponent from './../resuablecomponents/selectcomponent';


const EditDepartmentComponent=(props)=>{

    let [department, setDepartment] = useState({deptno:0, deptname:'', location:'',capacity:0});
    
    const locations = ['Pune', 'Mumbai', 'Kolhapur', 'Nagpur', 'Nashik', 'Satara', 'Thane'];
    // const locations  =undefined;
    const capacities = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];
    const serv = new DepartmentService();
    const [message, setMessage] = useState("");

    // define navigate and params object
    const navigate = useNavigate();
    const params = useParams();
    const id = parseInt(params.deptno);

    // use useEffect() to load the department data for edit purpose  
    useEffect(()=>{
        async function loadData(){
            try {
                let response = await serv.getDataById(id);
                console.log(`Response = ${response.data.data.location} and ${department.location}`);
                setDepartment(response.data.data);
                console.log(`Get by Id: ${response.data.data.location} and ${department.location}`);

            }catch(ex){
                setMessage(`Error Occurred in Loading data ${ex.message}`);
            }
        }
        loadData();
    },[]);

    const save= async ()=>{
         try {
             console.log(`dept is ${department}`);
            let response = await serv.putData(department);
            setMessage('Edit is Successful');
            // navigate to root
            navigate("/list");
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

export default EditDepartmentComponent;