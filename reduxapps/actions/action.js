import DepartmentService from './../../../services/departmentservices';
const  addDepartment=(dept)=>{
    console.log('Add Department Action is dispatched');
    dept.deptname = dept.deptname.toUpperCase();
    let serv = new DepartmentService();
    let depts = serv.getData();
    console.log(`Data received = ${JSON.stringify(depts)}`);
    console.log('OUT');
    return {
        type: 'ADD_DEPARTMENT', // output action dispatched
        depts // the payload
    }
};

export default addDepartment;