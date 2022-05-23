import React, { useState, useEffect } from "react";
 
 
const ListDepartmentsComponent = (props) => {
  
   const departments = props.departments;

   return (
       <div className="container">
           <strong>
               {JSON.stringify(departments)}
           </strong>
       </div>
   );

//    if(departments === undefined || departments.length === 0) {
//        return <div className="container">No Data</div>
//    } else {
 
//     return (
//       <div className="container">
//         <h1>List of Departments</h1>
//         <table className="table table-bordered table-striped">
//             <thead>
//                 <tr>
//                     <td>deptno</td>
//                     <td>deptname</td>
//                     <td>location</td>
//                     <td>capacity</td>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>{departments.dept.deptno}</td>
//                     <td>{departments.dept.deptname}</td>
//                     <td>{departments.dept.location}</td>
//                     <td>{departments.dept.capacity}</td>
//                 </tr>
//             </tbody>
//         </table>
//       </div>
//     );
//   }
}

export default ListDepartmentsComponent;