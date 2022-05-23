import React,{useState,useEffect,Fragment, Component} from 'react';
import DepartmentService from '../../services/departmentservices';




const DepartmentAjaxComponent = () =>{
    const [records, setRecords] = useState([]);
    const [department, setDepartment] = useState({deptno:0, deptname:'', location:'',capacity:0});
    const [message, setMessage] = useState('');
    const serv = new DepartmentService();
   
    useEffect(()=>{
        serv.getData().then((response)=>{
            setRecords(response.data.data);
        }).catch((error)=>{
            setMessage('Error Occured');
        });
        
    },[]);
   
    const handleInputChange = evt =>{
        console.log(evt.target.name);
        setDepartment({...department,[evt.target.name]:evt.target.value});
    }

    //get data by id
    const getDataById = (evt) =>{
        console.log(`Event is ${evt.target.value}`);
        serv.getDataById(evt.target.value).then((response)=>{
            console.log(response.data.data);
            //setRecords([...records,response.data.data]);
            setDepartment({deptno:response.data.data.deptno,deptname:response.data.data.deptname,location:response.data.data.location,capacity:response.data.data.capacity})
           // setEmployees({})
           //setEmployees({deptname:response.data.data.empname});
        }).catch((error)=>{
            setMessage('Error Occured');
        }); 
    }
    //save
    const save = () =>{
         if(department.deptno>102){
        throw new Error("Error! Please deptno should be less than 10");
      
    }
            const data = {
                deptno:department.deptno,
                deptname:department.deptname,
                location:department.location,
                capacity:department.capacity,
            };
          
          serv.postData(data).then((response)=>{
            setRecords([...records,response.data.data]);
        }).catch((error)=>{
           // throw new Error("Errro Ocuured while saving....");
            setMessage('Error Occured');
        }); 
            
    }
    const update = () =>{        
        const data = {
            deptno:department.deptno,
            deptname:department.deptname,
            location:department.location,
            capacity:department.capacity,
        };
      serv.putData(data).then((response)=>{
        setRecords([...records,response.data.data]);
        window.location.reload();
    }).catch((error)=>{
        setMessage('Error Occured');
    }); 
}
    const deletedept = (evt) =>{
     const id = evt.target.value;
      serv.deleteData(id).then((response)=>{
      
        alert("Record Deleted Successfully");
        window.location.reload();
          //setRecords([...records,response.data.data]);
    }).catch((error)=>{
        throw new Error("Errro Ocuured while deleting....");
        //setMessage('Error Occured');
    }); 
}
const clear=()=>{
     // reset department properties
   
     setDepartment({deptno:0, deptname:'', location:'',capacity:0});
}
    return(
        <div className='container'>
         
            <h1>Using Ajax Call Department Component</h1>
            <button className='btn btn-primary'>Get Data</button>
            
            <button className='btn btn-success' onClick={save} >Save Data</button>
           
            <button className='btn btn-success' onClick={update} >Update Data</button>
          
            <button className='btn btn-success' onClick={deletedept} >Delete Data</button>

            <button className='btn btn-success' onClick={getDataById} >get Data</button>
          
            <div className='container'>
                {message}
            </div>
            <br />
            <div className='container'>
            <table className="table table-striped table-bordered">
                <tbody>
        <tr>
          <td>DeptNo</td>
          <td><input type="text"  name='deptno' className="form-control" value={department.deptno} onChange={handleInputChange} /></td>
        </tr>
        <tr>
          <td>DeptName</td>
          <td><input type="text"  name='deptname' className="form-control" value={department.deptname} onChange={handleInputChange}/></td>
        </tr>
        <tr>
          <td>Location</td>
          <td><input type="text"  name='location' className="form-control" value={department.location} onChange={handleInputChange} /></td>
        </tr>
        <tr>
            <td>Capacity</td>
            <td><input type="text"  name='capacity' className="form-control" value={department.capacity} onChange={handleInputChange}/></td>
          </tr>
         
        <tr>
          <td></td>
          <td>
            {/* <input type="button" id="btnSave" value="ADD" className="btn btn-primary" onClick={save} /> */}
            <button className='btn btn-primary' onClick={save}>Add</button>
            <button className='btn btn-success' onClick={update}>Update</button>
            <input type="button" id="btnClear" value="Clear" className="btn btn-secondary" onClick={clear} />
          </td>
        </tr>
        </tbody>
      </table>
            </div>
            <hr/>
            <div className='container'>
            <table className='table table-bordered table-striped'>
                 <thead>
                     <tr>
                       <th>Department No.</th>
                       <th>Department Name</th>
                      <th>Location</th>
                      <th>Capacity</th>
                   </tr>
                </thead>
                <tbody >
                   {
                       
                  records.map((dept,idx)=>(
                        <tr key={idx}>
                        <td >{dept.deptno}</td>
                        <td >{dept.deptname}</td>
                           <td >{dept.location}</td>
                           <td >{dept.capacity}</td>
                        
                         <td><button id="btnDelete" className="btn btn-danger" value={dept.deptno} onClick={deletedept} >Delete</button>
                         <button id="btnUpdate" className="btn btn-warning" value={dept.deptno} onClick={getDataById} >View Data</button></td>
                        </tr>
                  ))
                 }
             </tbody>
            </table>
        </div>
        </div>
    );
}
export default DepartmentAjaxComponent;
