export const getDepartments=()=>{
    return {
        type: 'GET_DEPARTMENTS'
    };
};

export const addDepartment=(dept)=>{
    console.log('Add Department is dispatched');
    return {
        type:'ADD_DEPARTMENT',
        dept
    };
}