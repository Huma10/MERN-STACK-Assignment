import React,{useState,useEffect,Fragment} from 'react';
import EmployeeService from '../../services/employeeservices';

const EmployeeAjaxComponent = () =>{
    const [records, setRecords] = useState([]);
    const [employee,setEmployees] = useState({"empno":0,"empname":"","designation":"","salary":0,"deptno":""})
    const [message, setMessage] = useState('');
    const serv = new EmployeeService();

    useEffect(()=>{
        serv.getData().then((response)=>{
            setRecords(response.data.data);
        }).catch((error)=>{
            setMessage('Error Occured');
        });
        
    },[]);
   
    const handleInputChange = evt =>{
        console.log(evt.target.name);
        setEmployees({...employee,[evt.target.name]:evt.target.value});
    }

    //get data by id
    const getDataById = (evt) =>{
        console.log(`Event is ${evt.target.value}`);
        serv.getDataById(evt.target.value).then((response)=>{
            console.log(response.data.data);
            //setRecords([...records,response.data.data]);
            setEmployees({empno:response.data.data.empno,empname:response.data.data.empname,designation:response.data.data.designation,salary:response.data.data.salary,deptno:response.data.data.deptno})
           // setEmployees({})
           //setEmployees({deptname:response.data.data.empname});
        }).catch((error)=>{
            setMessage('Error Occured');
        }); 
    }
    //save
    const save = () =>{
        console.log(`${employee.empno}${employee.empname}${employee.designation}${employee.salary}${employee.deptno}`);
            const data = {
                empno:employee.empno,
                empname:employee.empname,
                designation:employee.designation,
                salary:employee.salary,
                deptno:employee.deptno
            };
          serv.postData(data).then((response)=>{
            setRecords([...records,response.data.data]);
        }).catch((error)=>{
            setMessage('Error Occured');
        });  
    }
    const update = () =>{
        const data = {
            empno:employee.empno,
            empname:employee.empname,
            designation:employee.designation,
            salary:employee.salary,
            deptno:employee.deptno
        };
      serv.putData(data).then((response)=>{
        setRecords([...records,response.data.data]);
        window.location.reload();
    }).catch((error)=>{
        setMessage('Error Occured');
    }); 
}
    const deleteemp = (evt) =>{
     const id = evt.target.value;
      serv.deleteData(id).then((response)=>{
        setRecords([...records,response.data.data]);
        window.location.reload();
    }).catch((error)=>{
        setMessage('Error Occured');
    }); 
}
const clear=()=>{
    // reset department properties
    setEmployees({empno:0, empname:'', designation:'',salary:0,deptno:0});
}
const SearchHandle=(evt)=>{
    console.warn(evt.target.value);
    if(evt.target.value){
        let result = serv.searchData(evt.target.value).then((response)=>{
            //setRecords([...records,response.data.data]);
            result = response.data.data;
            setRecords(result);
            //window.location.reload();
        }).catch((error)=>{
            setMessage('Error Occured');
        });
    }else{
        serv.getData().then((response)=>{
            setRecords(response.data.data);
        }).catch((error)=>{
            setMessage('Error Occured');
        });
    }
   
}
    return(
        <div className='container'>
            <h1>Using Ajax Call Employee Component</h1>
            <button className='btn btn-primary'>Get Data</button>
            
            <button className='btn btn-success' onClick={save} >Save Data</button>
           
            <button className='btn btn-success' onClick={update} >Update Data</button>
          
            <button className='btn btn-success' onClick={deleteemp} >Delete Data</button>

            <button className='btn btn-success' onClick={getDataById} >get Data</button>
          
            <div className='container'>
                {message}
            </div>
            <br />
            <div className='container'>
            <table className="table table-striped table-bordered">
                <tbody>
        <tr>
          <td>EmpNo</td>
          <td><input type="text" id="txtEmpNo" name='empno' className="form-control" value={employee.empno} onChange={handleInputChange} /></td>
        </tr>
        <tr>
          <td>EmpName</td>
          <td><input type="text" id="txtEmpName" name='empname' className="form-control" value={employee.empname} onChange={handleInputChange}/></td>
        </tr>
        <tr>
          <td>Designation</td>
          <td><input type="text" id="txtDesig" name='designation' className="form-control" value={employee.designation} onChange={handleInputChange} /></td>
        </tr>
        <tr>
            <td>Salary</td>
            <td><input type="text" id="txtSalary" name='salary' className="form-control" value={employee.salary} onChange={handleInputChange}/></td>
          </tr>
          <tr>
            <td>Dept No</td>
            <td><input type="text" id="txtDept" name='deptno' className="form-control" value={employee.deptno} onChange={handleInputChange} /></td>
          </tr>
        <tr>
          <td></td>
          <td>
            <input type="button" id="btnSave" value="ADD" className="btn btn-primary" onClick={save} />
            
            <input type="button" id="btnSave" value="Update" className="btn btn-success" onClick={update} />
            <input type="button" id="btnClear" value="Clear" className="btn btn-secondary" onClick={clear} />
          </td>
        </tr>
        </tbody>
      </table>
            </div>
            <hr/>
            <div className='container'>
                <input type="text" placeholder='Search..' className='form-control' onChange={SearchHandle}></input><br></br>
            <table className='table table-bordered table-striped'>
                 <thead>
                     <tr>
                       <th>Employee No.</th>
                       <th>Employee Name</th>
                      <th>Designation</th>
                      <th>Salary</th>
                      <th>Department No.</th>
                   </tr>
                </thead>
                <tbody >
                   {
                       
                  records.map((emp,idx)=>(
                        <tr key={idx}>
                        <td >{emp.empno}</td>
                        <td >{emp.empname}</td>
                           <td >{emp.designation}</td>
                           <td >{emp.salary}</td>
                        <td >{emp.deptno}</td>
                        
                         <td><button id="btnDelete" className="btn btn-danger" value={emp.empno} onClick={deleteemp} >Delete</button>
                         <button id="btnUpdate" className="btn btn-warning" value={emp.empno} onClick={getDataById} >View Data</button></td>
                        </tr>
                  ))
                 }
             </tbody>
            </table>
        </div>
        </div>
    );
}
export default EmployeeAjaxComponent;