import styles from './../../styles/Home.module.css';
import React,{useState,useEffect,Fragment, Component} from 'react';
import SelectComponent from './selectcomponent';
import Navigator from './navigator';
import {useRouter} from 'next/router';
import DepartmentList from './deptlist';
import Link from 'next/link';
const HomeComponent=({dept})=>{
    console.log(`data is ${typeof dept}`);
    const router = useRouter();
    let a = JSON.stringify(dept);
    let [department, setDepartment] = useState({deptno:0, deptname:'', location:'',capacity:0});
    let [records,setRecords] = useState([]);
    const locations = ['Pune', 'Mumbai', 'Kolhapur', 'Nagpur', 'Nashik', 'Satara', 'Thane'];
    // const locations  =undefined;
    const capacities = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];
    const  [queryValue,setValue] = useState(0);
    // useEffect(async()=>{
    //     const response = await fetch('http://localhost:7011/api/departments')
    //     const data = await response.json()
    //     console.log(data)
    //     setRecords(data)
        
    // },[]);
     // define a router reference
   const deleteDepartment = async(id) =>{
        let response = await fetch(`http://localhost:7011/api/departments/${id}`,{
            method:"DELETE"
        })
        const data = await response.json();
        router.push('/components/home')
   }  
 
    const save = async() =>{
        console.log(`making an AJAX calls...${JSON.stringify(department)}`);
        let response = await fetch("http://localhost:7011/api/departments",{
            //adding method type
            method:"POST",
            body:JSON.stringify(department),
            headers:{"Content-type":"application/json"}
        })
         const data = await response.json()
        // setRecords([...records,data.data]);
        router.push('/components/home')
   }
   const clear=()=>{
    // reset department properties 
    setDepartment({deptno:0, deptname:'', location:'',capacity:0});
    }
    // explicitly navigate to the home along with query parameter
    const navigate=()=>{
        router.push({
            pathname:'/components/edit',
            query:{
                pValue:d.deptno
            }
        })
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
                <input type="button" className='btn btn-success' value="Save" onClick={save}/>
            </div>
          
            <div>
             <strong>
                 Received Data:
                 <br/>
                 {JSON.stringify(dept)}
             </strong>
             {/* <DepartmentList deptData={dept}/> */}
             <table className='table table-bordered table-stripped'>
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
                       
                  dept.data.map((d,idx)=>(
                      
                        <tr key={idx}>
                        <td >{d.deptno}</td>
                        <td >{d.deptname}</td>
                           <td >{d.location}</td>
                           <td >{d.capacity}</td>
                        
                        {/* <input type="hidden" value={d.deptno} onChange={(evt)=>setValue(parseInt(evt.target.value))}></input> */}
                          <td><button className='btn btn-secondary'><Link href={`/components/${d.deptno}`}  >Edit</Link></button>
                          <button className='btn btn-danger' onClick={()=>deleteDepartment(d.deptno)}>Delete</button></td>
                        </tr>
                  ))
                 }
             </tbody>
             </table>
         </div>
        </div>
        </div>
    );
};

// The following method will exec during build

    // the following method will be executed during build
export async function getStaticProps() {
    console.log(`Making an AJAX Call`);
  
    let response = await fetch("http://localhost:7011/api/departments");
    const dept = await response.json();
    console.log(`Received data = ${JSON.stringify(dept)}`);
    return {
      props: {
        dept
      },
    };
  }

export default HomeComponent;
