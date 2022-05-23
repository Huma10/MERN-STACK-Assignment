import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import EmployeeService from '../../services/employeeservices'
const ListDepartmentsComponent = () => {
  const [employees, setEmployees] = useState([]);
  const [message, setMessage] = useState("");
  const serv = new EmployeeService();

  useEffect(()=>{
      async function loadData(){
          try {
              let response = await serv.getData();
              setEmployees(response.data.data);
              console.log(`${Object.keys(employees[1])}`);
          }catch(ex){
              setMessage(`Error Occurred in Loading data ${ex.message}`);
          }
      }
      loadData();
  },[]);

  if (setEmployees.length === 0) {
        <div className="container">
            <h2>No records to Show</h2>
        </div>
  } else {
    return (
      <div className="container">
        <h1>List of Departments</h1>
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    {
                      Object.keys(setEmployees[0]).map((header,index)=>(
                          <th key={index}>{header}</th>
                      ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    setEmployees.map((emp,idx)=>(
                        <tr key={idx}>
                            {
                                 Object.keys(setEmployees[0]).map((header,index)=>(
                                    <td key={index}>{emp[header]}</td>
                                ))
                            }
                            <td>
                                <button className="btn btn-warning">
                                    <Link to={`/edit/${emp.empno}`}>Edit</Link>
                                </button>| <button className="btn btn-danger">
                                    <Link to={`/delete/${emp.empno}`}>Delete</Link>
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </div>
    );
  }
};

export default ListDepartmentsComponent;