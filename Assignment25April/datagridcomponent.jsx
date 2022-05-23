import React, { useState,useEffect } from 'react';
const DataGridComponent = (props) =>{

    let isEdit = props.canEdit;
    let IsPaginationEnabled = props.IsPaginationEnabled;
   
  
    let d = [5,10,15,20,25];
    let [DropDownValues,setDropDownvalues] = useState(d);
    let [updateTable,setUpdateTable] = useState();

    
    const handleEditTable = (evt) =>{
        console.log(`after edit ${evt.target.innerHTML}`);
    //     console.log("called..."+(parseInt(evt.target.value))); 
    //    isEdit = true;
    // for (var index = 0; index < props.dataSource.length; index++) {
    //     if (props.dataSource[index].EmpNo === evt.target.value) {
    //         props.dataSource[index]["EmpNo"] = emp.EmpNo;
    //         props.dataSource[index]["EmpName"] = emp.EmpName;
    //         props.dataSource[index]["DeptName"] = emp.DeptName;
    //         props.dataSource[index]["Designation"] = emp.Designation;
    //         props.dataSource[index]["Salary"] = emp.Salary;
    //       return props.dataSource;
    //     }
    //   }
       return props.dataSource;
    }
    
    const handleDelete = (evt) =>{
      
        for (var index = 0; index < props.dataSource.length; index++) {
            
            if (props.dataSource[index].deptno == evt.target.value) {
                props.dataSource.splice(index, 1);
                console.log("here",props.dataSource);
               // window.location.reload();
               props.getSelectedValue(evt.target.value);
              return props.dataSource;
             
            }
          }
          return props.dataSource;
    }
    const handleChange = (evt) =>{
        //HANDLE-CHANGE-SORT
        console.log(evt.target.value);
       // props.dataSource.sort((a,b)=>a.props.dataSource.deptno - b.props.dataSource.deptno);
    }
    const handleSelectChange = (evt) =>{
        console.log(evt.target.value);
        setDropDownvalues(evt.target.value)
    }
    const getDeptsByLimit = (itemsPerPage,currentPage) =>{
        var sliceDepts = props.dataSource.slice(itemsPerPage * (currentPage -1),itemsPerPage*currentPage);
        return sliceDepts;
      }
    // CHanges start
    
    // Changed end
    if(props.canEdit || props.canDelete) {
        return (
            <div>
                
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                    {
                            props.headers.map((h,idx)=>(
                                <th key={idx}>{h}<button className='btn btn-secondary' value={h} onClick={handleChange}>↑</button></th>
                            ))
                        }
                        
                    </tr>
                </thead>
                <tbody >
                    {/* {
                       
                        props.dataSource.map((dept,idx)=>(
                            <tr key={idx}>
                                <td >{dept.deptno}</td>
                                <td >{dept.deptname}</td>
                                <td >{dept.location}</td>
                                <td >{dept.capacity}</td>
                                <td>{props.canEdit && (<button className='btn btn-warning' onClick={handleEditTable}>Edit</button>)}
                                    
                                    {
                                        props.canDelete &&(<button className='btn btn-danger' onClick={handleDelete} value={dept.deptno}>Delete</button>)
                                    }</td>
                            </tr>
                        ))
                    } */}
                    { 
                       props.dataSource.map((dept,i)=>(
                            <tr key={i}>
                                { isEdit &&
                                    props.headers.map((h,idx)=>(
                                        <td key={idx} contentEditable="true" onClick={handleChange} value={dept[h]} onChange={handleEditTable}>{dept[h]}</td>
                                        
                                    ))
                                }
                                <td>{props.canEdit && (<button className='btn btn-warning' onClick={handleEditTable} value={dept.deptno}>Edit</button>)}
                                    
                                    {
                                        props.canDelete &&(<button className='btn btn-danger' onClick={handleDelete} value={dept.deptno}>Delete</button>)
                                    }</td>
                            </tr>
                        ))
                    }
                     Select Page Size {IsPaginationEnabled && <select 
                  value={DropDownValues} onChange={handleSelectChange}>
                      {
                          d.map((drop,idx)=>(
                              <option key={idx} value={drop}>{drop}</option>
                          ))
                      }
                  </select>}
                </tbody>             
            </table>
            </div>
        );
    }
    // return (
    //     <table className='table table-bordered table-striped'>
    //             <thead>
    //                 <tr>
    //                     <th>DeptNo</th>
    //                     <th>DeptName</th>
    //                     <th>Location</th>
    //                     <th>Capacity</th>
    //                 </tr>
    //             </thead>
    //             <tbody >
    //                 {
                       
    //                     props.dataSource.map((dept,idx)=>(
    //                         <tr key={idx}>
    //                             <td >{dept.deptno}</td>
    //                             <td >{dept.deptname}</td>
    //                             <td >{dept.location}</td>
    //                             <td >{dept.capacity}</td>
    //                             <td>
    //                                 <button className='btn btn-warning' value={isEdit} onClick={handleEditTable}>Edit</button></td>
    //                         </tr>
    //                     ))
    //                 }
    //             </tbody>
    //         </table>
    // )
}
export default DataGridComponent;