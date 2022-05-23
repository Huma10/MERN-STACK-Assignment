// import operators for calling services (call()), dispatching output action (put())
// taking the latest response (takeLatest) and listening to all actions (all())

import { all, call, put, takeLatest } from "redux-saga/effects";
// also import the service
import DepartmentService from "../../../services/departmentservices";
import LoginService from '../../../services/loginservice'


// local methods for get and post
function getDepartments() {
  let serv = new DepartmentService();

  
  // the resolved promise object which is a response which is itself a promise
  const response = serv.getData().then((result) => result.data);
  // lets resolve the promise response
  return Promise.resolve(response);
}

function postDepartment(dept) {
  let serv = new DepartmentService();
  const response = serv.postData(dept).then((result) => result.data);
  return Promise.resolve(response);
}
function postLoginUser(user) {
    let serv = new LoginService();
    const response = serv.postData(user).then((result) => result.data);
    return Promise.resolve(response);
  }
// GET_DEPARTMENT input / output generator function

function* outputActionGetDepartments() {
  try {
    // call the promise based method
    const response = yield call(getDepartments);
   // console.log(`The resolved response in SAGA is ${JSON.stringify(response)}`);
    // Lets dispatch the success  output action
    yield put({
      type: "GET_DEPARTMENTS_SUCCESS", // action type
      departments: response.data, // payload
      message: "Successfully received the data",
    });
  } catch (ex) {
    // Lets dispatch the failed  output action
    yield put({
      type: "GET_DEPARTMENTS_FAILED", // action type
      message: `Error Occurred ${ex.message}` ,
    });
  }
}
function* inputActionGetDepartments() {
  // link the input action with output action
  // Parameters
  // P1: The Action that is dispatched
  // P2: The generator function (worker) that will executed against the input dispatched action
  yield takeLatest("GET_DEPARTMENTS", outputActionGetDepartments);
}

// ADD_DEPARTMENT input / output generator function

// pass the 'action' object to read the payload
// so that it can be passed to the postDepartment method
function* outputActionAddDepartment(action) {
    try {
        console.log(`Received data from UI is = ${JSON.stringify(JSON.stringify(action.dept))}`);
        // call the promise based method
        const response = yield call(postDepartment, action.dept);
        //console.log(`The resolved response in SAGA is ${JSON.stringify(response)}`);
        // Lets dispatch the success  output action
        yield put({
          type: "ADD_DEPARTMENT_SUCCESS", // action type
          department: response.data, // payload
          message: "Successfully added the data",
        });
      } catch (ex) {
        // Lets dispatch the failed  output action
        yield put({
          type: "ADD_DEPARTMENT_FAILED", // action type
          message: `Error Occurred ${ex.message}` ,
        });
      }
}

function* inputActionAddDepartment() {
  // The parameter 2 will read the action object with the payload
  // {type:`ADD_DEPARTMENT`, payload}
  // the takeLatest will pass the action object to the linked output method
  yield takeLatest("ADD_DEPARTMENT", outputActionAddDepartment);
}
function* outputActionLoginUser(action) {
    try {
        console.log(`Received data from UI is = ${JSON.stringify(JSON.stringify(action.user))}`);
        // call the promise based method
        const response = yield call(postLoginUser, action.user);
        //console.log(`The resolved response in SAGA is ${JSON.stringify(response)}`);
        // Lets dispatch the success  output action
        yield put({
          
          type: "LOGIN_USER_SUCCESS", // action type
          user: response.data, // payload
          message: "Successfully added the data",
          success:1,
        });
      } catch (ex) {
        // Lets dispatch the failed  output action
        yield put({
          type: "LOGIN_USER_FAILED", // action type
          message: `Error Occurred ${ex.message}` ,
          success:0,
        });
      }
}
function* inputActionLOGINUser() {
    // The parameter 2 will read the action object with the payload
    // {type:`ADD_DEPARTMENT`, payload}
    // the takeLatest will pass the action object to the linked output method
    yield takeLatest("LOGIN_USER", outputActionLoginUser);
  }

// create a SAGA Export function, that will work on root
export default function* rootSaga() {
    console.log(`Running with Root SAGA`);
  // listen to all actions
  yield all([inputActionGetDepartments(),inputActionAddDepartment(),inputActionLOGINUser()]);
}