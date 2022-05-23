import React, { useState, useEffect } from "react";
import { getDepartments } from "./../action/action";
import { useDispatch, useSelector } from "react-redux";

const ListDepartmentsSAGAComponent = () => {
  const [departments, setDepartments] = useState([]);
  // subscribe to the store
  const stateData = useSelector((state) => state.departments);
  // lets dispatch the action from the root
  const dispatch = useDispatch();
  // dispatch(getDepartments());
  // setDepartments(stateData);

  useEffect(() => {
    // call to the action
    dispatch(getDepartments());
    // if(stateData !== undefined){
    // update the state for departments
    setDepartments(stateData);
    // }
  },[stateData]);

  //    return (
  //        <div className="container">
  //            <strong>
  //               {JSON.stringify(departments)}
  //            </strong>
  //        </div>
  //    );

  if (departments === undefined || departments.length === 0) {
    return <div className="container">No Data</div>;
  } else {
    return (
      <div className="container">
        <h1>List of Departments</h1>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <td>deptno</td>
              <td>deptname</td>
              <td>location</td>
              <td>capacity</td>
            </tr>
          </thead>
          <tbody>
            {departments.map((dept, idx) => (
              <tr key={idx}>
                <td>{dept.deptno}</td>
                <td>{dept.deptname}</td>
                <td>{dept.location}</td>
                <td>{dept.capacity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default ListDepartmentsSAGAComponent;