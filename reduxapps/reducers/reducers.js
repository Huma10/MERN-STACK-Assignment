import {combineReducers} from 'redux';
// use this reducers for ADD_DEPARTMENT output action 
export const addDepartmentReducer=(state, action)=>{
    console.log('Monitoring Add Department Reducer');
    switch (action.type) {
        case 'ADD_DEPARTMENT':
            return {
                dept:action.dept// payload received from output action (see action.js)
            }
        default:
           return state;
    }
};


// use this reducers for ADD_DEPARTMENT output action 
export const listDepartmentsReducer=(state=[], action)=>{
    console.log('Monitoring List Departments Reducer');
    switch (action.type) {
        case 'ADD_DEPARTMENT':
             // call the addDepartmentReducer function
             // we are using same action type for  both the reducers
             // the addDepartmentReducer will take an initial state as undefined and will be 
             // overwriting it by the dept payload received from output action   
             return [...state, addDepartmentReducer(undefined, action)];
        default:
           return state;
    }
}

// create a combine reducer to aggregate reducer functions into a single reducer object
// current I am using only 'listDepartmentsReducer' because it is calling 
// the 'addDepartmentReducer'
const reducers = combineReducers({listDepartmentsReducer});

export default reducers;