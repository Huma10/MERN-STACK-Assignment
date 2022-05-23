import styles from './../../styles/Home.module.css';
import React,{useState,useEffect,Fragment, Component} from 'react';
import SelectComponent from './selectcomponent';
import Navigator from './navigator';
import {useRouter} from 'next/router';
const EditComponent=({deptUpdatedData})=>{
  console.log(`dept updated data ${JSON.stringify(deptUpdatedData)}`);
    const [value,setValue] = useState(0);
    let [department, setDepartment] = useState({deptno:0, deptname:'', location:'',capacity:0});
    let [records,setRecords] = useState([]);
    const locations = ['Pune', 'Mumbai', 'Kolhapur', 'Nagpur', 'Nashik', 'Satara', 'Thane'];
    // const locations  =undefined;
    const capacities = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];
    //get router refe
    const router = useRouter();
    useEffect(()=>{
        setDepartment(deptUpdatedData);
    },[deptUpdatedData])
    const save = async() =>{
        console.log(`making an AJAX calls...${JSON.stringify(department)}`);
        let response = await fetch(`http://localhost:7011/api/departments/${deptUpdatedData.deptno}`,{
            //adding method type
            method:"PUT",
            body:JSON.stringify(department),
            headers:{"Content-type":"application/json"}
        })
        
        const data = await response.json();
        console.log(`after updating ${data.data}`);
        console.log(data.data);
        router.push('/components/home')
      //  setRecords([...records,data.data]);
   }
   const clear=()=>{
    // reset department properties 
    setDepartment({deptno:0, deptname:'', location:'',capacity:0});
    }
    
    return(
        <div className={styles.container}>
            <Navigator></Navigator>
            
            <div className={styles.container}>
            <h1>CRUD App </h1>
           
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
                <input type="button" className='btn btn-success' value="Update" onClick={save}/>
            </div>
          
            </div></div>
    );
}
export default EditComponent;