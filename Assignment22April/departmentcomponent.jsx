import react,{useState, Fragment,useEffect} from 'react';
import DataGridComponent from '../resuablecomponents/datagridcomponent';
import DatagridComponent from '../resuablecomponents/datagridcomponent2';
import SelectComponent from '../resuablecomponents/selectcomponent';
import Pagination from '../resuablecomponents/pagination';
const DepartmentComponent=()=>{

    let [department, setDepartment] = useState({deptno:0, deptname:'', location:'',capacity:0});
    let [departments, updateDepartments] = useState([]);
    
    const locations = ['Pune', 'Mumbai', 'Kolhapur', 'Nagpur', 'Nashik', 'Satara', 'Thane'];

    //CAN-EDIT-PROPERTY
    let [canEdit,setCanEdit] = useState(true);
    let [canDelete,setCanDelete] = useState(true);
    const headers = Object.keys(department);


  
  const [currentPage, setCurrentPage] = useState(1);
  const [deptsPerPage] = useState(10);

  // Get current Todo
  const indexOfLastDept = currentPage * deptsPerPage;
  const indexOfFirstDept = indexOfLastDept - deptsPerPage;
  const currentDepts = departments.slice(indexOfLastDept, indexOfFirstDept);
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
    //SORTING
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('');
    useEffect(() => {
        console.log(`Here...`);
        const sortArray = type => {
            console.log(`type is ${type}`);
            const types = {
              deptno: 'deptno',
              deptname: 'deptname',
            };
            const sortProperty = types[type];
            const sorted = [...departments].sort((a, b) => b[sortProperty] - a[sortProperty]);
            setData(sorted);
          };
      
          sortArray(sortType);
    }, [sortType]);
    //SORTING END
    const save=()=>{
        // mutate the departments array with new department object
        updateDepartments([...departments, department]);
    };
    const clear=()=>{
        // reset department properties
        setDepartment({deptno:0, deptname:'', location:'',capacity:0});
    }
    const updateDept = (id) => {

        console.log("deleteDept", id);
        //  departments.splice(id, 1);
        console.log("deptsss", department);
        document.getElementById('dv3').innerHTML = JSON.stringify(department);


    }
    const deleteDept = (id) => {

        console.log("deleteDept", id);
        //  departments.splice(id, 1);
        departments = departments.filter((item) => item.id != Number(id))
        updateDepartments(departments);
        console.log("departments", departments);
    }
    return(
        <Fragment>
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
                {/* <input type="text" value={department.location} onChange={(evt)=>setDepartment({...department, location:evt.target.value})} className="form-control"/> */}
                {/* <select className='form-control'
                  value={department.location} onChange={(evt)=>setDepartment({...department, location:evt.target.value})}>
                      {
                          locations.map((loc,idx)=>(
                              <option key={idx} value={loc}>{loc}</option>
                          ))
                      }
                  </select> */}
                  <SelectComponent dataSource={locations} valueProperty={department.location}
                  getSelectedValue={(value)=>{setDepartment({...department,location:value})}}
                  ></SelectComponent>
            </div>
            <div className='form-group'>
                <label>Capacity</label>
                <input type="text" value={department.capacity} onChange={(evt)=>setDepartment({...department, capacity:parseInt(evt.target.value)})} className="form-control"/>
            </div>
            <div className='form-group'>
                <input type="button" className='btn btn-warning' value="Clear"
                 onClick={clear}/>
                <input type="button" className='btn btn-success' value="Save" onClick={save}/>
            </div>
            <hr/>
            <div className='container'>
                <strong>
                    {JSON.stringify(departments)}
                </strong>
            </div>
            <hr/>
            {/* <DataGridComponent dataSource={departments} canEdit={canEdit} canDelete={canDelete} headers={headers} IsPaginationEnabled={true}
            getSelectedValue={(value)=>{setDepartment({...department})}}
           d={currentDepts}></DataGridComponent> */}
           <DatagridComponent getData={(value) => { setDepartment({ ...department, deptno: value }) }}
                        getDataName={(value) => { setDepartment({ ...department, deptname: value }) }} getDataLocation={(value) => { setDepartment({ ...department, location: value }) }} getDataCapacity={(value) => { setDepartment({ ...department, capacity: value }) }} delete={(id) => deleteDept(id)} update={(id) => updateDept(id)} canDelete={true} dataSource={department} dataSource2={departments}
                    ></DatagridComponent>
            <Pagination
        deptssPerPage={deptsPerPage}
        totalDepts={departments.length}
        paginate={paginate}
      />
            <div className='container'>
                <select onChange={(e) => setSortType(e.target.value)}> 
                    <option value="deptno">DeptNo</option>
                    <option value="deptname">DeptName</option>
                </select>
                </div>
            {/* <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>DeptNo</th>
                        <th>DeptName</th>
                        <th>Location</th>
                        <th>Capacity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       
                        departments.map((dept,idx)=>(
                            <tr key={idx}>
                                <td>{dept.deptno}</td>
                                <td>{dept.deptname}</td>
                                <td>{dept.location}</td>
                                <td>{dept.capacity}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table> */}
        </Fragment>
    );
};

export default DepartmentComponent;