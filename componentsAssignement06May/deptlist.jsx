import styles from './../../styles/Home.module.css';
import React,{useState,useEffect,Fragment, Component} from 'react';
import SelectComponent from './selectcomponent';
import Navigator from './navigator';
import {useRouter} from 'next/router';
const DepartmentList = ({deptData}) => {

console.log(`${deptData}`);
    return(
        <div>
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
                       
                  deptData.data.map((d,idx)=>(
                      
                        <tr key={idx}>
                        <td >{d.deptno}</td>
                        <td >{d.deptname}</td>
                           <td >{d.location}</td>
                           <td >{d.capacity}</td>
                        
                        {/* <input type="hidden" value={d.deptno} onChange={(evt)=>setValue(parseInt(evt.target.value))}></input>
                          <td><button id="btnDelete" className="btn btn-danger" value={d.deptno}  onChange={(evt)=>setValue(parseInt(evt.target.value))} onClick={navigate}  >Edit</button>
                         <button id="btnUpdate" className="btn btn-warning" value={d.deptno}  >Delete</button></td> */}
                        </tr>
                  ))
                 }
             </tbody>
             </table>
        </div>
    );
}
export default DepartmentList;