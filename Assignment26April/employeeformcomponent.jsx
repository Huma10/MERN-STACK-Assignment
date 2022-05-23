import React, { Fragment, useState } from "react";
//import select component
import EmployeeSelectComponent from "../resuablecomponents/employeeselectcomponent";
//import Select from react-slect librray
import Select from 'react-select';
import ValidationSummaryComponent from "./validationsummarycomponent";

const EmployeeComponent = () => {
  let [employee, setEmployee] = useState({
    EmpNo: 0,
    EmpName: "",
    Designation: "",
    DeptName: "",
    Salary: 0,
    TechnicalExpertise: [],
  });
  const Designations = [
    "Director",
    "CTO",
    "Accountant",
    "Project Manager",
    "Manager",
    "Lead",
    "Engineer",
    "Developer",
    "Tester",
    "Cashier",
  ];
  const DeptNames = ["Dev", "Test", "Accounts", "HR", "System"];
  const TechnicalExpertises = [
    "C++",
    "C#",
    "JAVA",
    "Python",
    "JavaScript",
    "React",
    "Angular",
    "jQuery",
    "Node.js",
    "Express",
    "nUnit",
    "jUnit",
  ];
  //FOR-VALIDATIONS
  const [isEmpNoValidRule1,checkEmpNoRule1] = useState(true);
  const [isEmpNoValidRule2,checkEmpNoRule2] = useState(true);
  const [isEmpNameValidRule1,checkEmpNameRule1] = useState(true);
  const [isEmpNameValidRule2,checkEmpNameRule2] = useState(true);
  const [isFormValid,checkForm] = useState(true);
  let [employees, updateEmployees] = useState([]);
    const save=()=>{        
        updateEmployees([...employees,employee]);
        console.log(`Save is called... ${employees}`);
    };
    const clear=()=>{
      setEmployee({EmpNo: 0,
        EmpName: "",
        Designation: "",
        DeptName: "",
        Salary: 0,
        TechnicalExpertise: []});
    }
    const handleChange = (evt) =>{
        if(evt.target.name === 'EmpNo'){
            setEmployee({...employee, EmpNo:parseInt(evt.target.value)});
        }
        if(evt.target.name === 'EmpName'){
            setEmployee({...employee, EmpName:evt.target.value});
        }
        if(evt.target.name === 'DeptName'){
            setEmployee({...employee, DeptName:evt.target.value});
        }
        if(evt.target.name === 'Designation'){
            setEmployee({...employee, Designation:evt.target.value});
        }
        if(evt.target.name === 'Salary'){
            setEmployee({...employee, Salary:parseInt(evt.target.value)});
        }
        if(evt.target.name === 'TechnicalExpertise'){
      //     console.log(`${evt.target.selectedOptions}`);
      //     var elem = evt.target.selectedOptions;
      //     console.log(elem);
      //  for (var i = 0; i < elem.length; i++) {
      //      console.log(elem[i].attributes[0].nodeValue); //second console output
      //      setEmployee({...employee, TechnicalExpertise: evt.target.selectedOptions});
      //  }
      let selectedValue = Array.from(evt.target.selectedOptions,(option)=>option.value)
      setEmployee({...employee, TechnicalExpertise: selectedValue});
        }
      validateForm(evt.target.name,evt.target.value);
    }
      const validateForm=(name,value)=>{
        if(name === "EmpNo"){
            if(parseInt(value)<0){              
                checkEmpNoRule1(false);
                checkForm(false);
            }else if(value.length>8){
                checkEmpNoRule2(false);
                checkForm(false);
            }
            else {
                checkEmpNoRule1(true);
                checkEmpNoRule2(true);
                checkForm(true);
            }
        }

        if(name === "EmpName" ){
            if(!/^[A-Z]/.test( value)){
                checkEmpNameRule1(false);
                checkForm(false);
            }else if(!value.match(/^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$/)){
                checkEmpNameRule2(false);
                checkForm(false);
            }
            else {
                checkEmpNameRule1(true);
                checkEmpNameRule2(true);
                checkForm(true);
            }
        }

    };
  return (
    <Fragment>
     
      <h1 className="text-center">Employee Data Entry Form</h1>
    {/* { isEmpNameValidRule1 && <ValidationSummaryComponent dataSource={isEmpNameValidRule1}/>}
    { isEmpNameValidRule2 || <ValidationSummaryComponent dataSource={isEmpNameValidRule2}/>} */}
      <form name="frmEmp">
      <div className="container">
        <table className="table table-borderless">
            <tbody>
          <tr>
            <td>
              <div className="form-group">
                <label>EmpNo</label>
                <input type="text" className="form-control" name="EmpNo" value={employee.EmpNo} onChange={handleChange} />
                <div className='alert alert-danger' hidden={isEmpNoValidRule1}>
                         EmpNo MUST be +ve integer
                     </div>
                     <div className='alert alert-danger' hidden={isEmpNoValidRule2}>
                         EmpNo MUST be 8 digits
                     </div>
                     
              </div>
            </td>
            <td>
              <div className="form-group">
                <label>EmpName</label>
                <input type="text" className="form-control" name="EmpName" value={employee.EmpName} onChange={handleChange} />
                <div className='alert alert-danger' hidden={isEmpNameValidRule1}>
                         EmpName MUST start from uppercase
                     </div>
                     <div className='alert alert-danger' hidden={isEmpNameValidRule2}>
                        Only 2 BlankSpaces are allowed
                     </div>
              </div>
            </td>
          </tr>
          <tr>
          <td>
            <div className="form-group">
              <label>Designation</label>             
                <EmployeeSelectComponent dataSource={Designations} name="Designation" isMultiSelect={false} valueProperty={employee.Designation}
                   onSelect={handleChange}></EmployeeSelectComponent>            
            </div>
            </td>
            <td>
            <div className="form-group">
              <label>Department Name</label>             
                <EmployeeSelectComponent dataSource={DeptNames} name="DeptName" isMultiSelect={false} valueProperty={employee.DeptName}
                   onSelect={handleChange}></EmployeeSelectComponent>            
            </div>
            </td>
          </tr>
          <tr>
          <td>
            <div className="form-group">
              <label>Salary</label>             
              <input type="text" className="form-control" name="Salary" value={employee.Salary} onChange={handleChange}/>          
            </div>
            </td>
            <td>
            <div className="form-group">
              <label>Technical Experties</label>             
                <EmployeeSelectComponent dataSource={TechnicalExpertises} isMultiSelect={true} name="TechnicalExpertise" 
                   onSelect={handleChange} ></EmployeeSelectComponent>            
                  
            </div>
            </td>
          </tr>
          <tr>
              <td>
                  <div className="text-center">
                        <input type="button" value="Save" className="btn btn-success"  disabled={!isFormValid}
                    onClick={save}/>
                  </div>
              </td>
              <td>
                  <div className="text-center">
                        <input type="button" value="Clear" onClick={clear} className="btn btn-warning"/>
                  </div>
              </td>
          </tr>
          </tbody>
        </table>
        <hr/>
            <div className='container'>
               <strong>
               
                   {JSON.stringify(employees)}
               </strong>
            </div> 
            
      </div>
      </form>
    </Fragment>
  );
};
export default EmployeeComponent;
