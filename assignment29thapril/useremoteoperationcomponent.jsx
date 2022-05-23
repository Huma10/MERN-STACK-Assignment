import React, { Fragment, useEffect, useReducer, useState } from 'react';
import axios from 'axios';

// Order of Execution
// 1. Component is loaded and custom hook is invoked
// 2. Custom Hook will initialize the useReducer() with the initialState and reducer function for dispatching action
// 3. The custom hook will be executed, in our case its uses 'useEffect()' hook to make an AJAX call using axios
// 4. Based on the status of useEffect() execution, the the action will be dispatched
// 5. The dispatched action will be listen by useReducer and its reducer function and state will be updated accordingly
// 6. The custom hook will return the updated state 
// 7. The updated state will bve used by component to update the rendering   



// define an initial state for the data that will be displayed on component
const initialState = {
    loading: '', // call in progress
    error: '', // state for error
    data: [] // initial State for the data
};

// create a Custom Reducer,tht will be used to update the state based on AJAX call
const useStateUpdater = (url, method, body, headers) => {
    console.log('In Custom Hook');
    // 1. use the 'useRedducer()' Hook, this will define a 'STATE_PROPERTY' and 'ACTION_TO_DISPATCH' that will
    // be used to update the state 
    // 2. dispatch({type: 'ACTION_DISPATCH_TYPE', payload:DATA}): the action that will be dispatched and this will accept the object
    // with the standard property name as 'type'. The 'type' represent the current action to be dispatched
    // the 'payload', represents the data that will be updated in 'state'
    const [externalData, dispatch] = useReducer(reducer, initialState);
    // lets write a logic that will be a reason to dispatch an action and will
    // inform reducer to update the state
    useEffect(() => {
        // init the beginning dispatch an action call as 'DATA_FETCH_STARTED'
        dispatch({ type: 'DATA_FETCH_STARTED' });
        axios(
            {
                method: method,
                url: url,
                data: body,
                headers: headers
            })
            .then((response) => {
                if (response.status !== 200)
                    throw new Error(`Error Occurred while receiving response ${response.statusText}`);
                // receive the response
                return response.data;
            }) // resolve the 'DATA_FETCH_SUCCESS'
            .then((json) => {
                // dispatch the action for Success
                dispatch({ type: 'DATA_FETCH_SUCCESS', payload: json.data });
            }) // dispatch the 'DATA_FETCH_FAILED'
            .catch((error) => {
                dispatch({ type: 'DATA_FETCH_FAILED', payload: error.message })
            });

    }, []);
    console.log('return from Custom Hook (this is async)');
    // return the final data
    return externalData;
};




// define a reducer function, this will accept initialState and action to transform/update
// initialState to final/updated state
// action may be DATA_FETCH_STARTED: The AJAX call initialization
// action may be DATA_FETCH_FAILED: The AJAX call failed
// action may be DATA_FETCH_SUCCESS: The AJAX call is successful
const reducer = (state, action) => {
    console.log('In reducer Function');
    switch (action.type) {
        case 'DATA_FETCH_STARTED':
            console.log('Init');
            // update the state
            return { ...state, loading: 'call started', error: '' };
        case 'DATA_FETCH_SUCCESS':
            console.log('Success');
            // update the state with successful data
            return { ...state, loading: 'Call Completed Successfully', error: '', data: action.payload };
        case 'DATA_FETCH_FAILED':
            console.log('Fail');
            return { ...state, loading: 'Call Completed with Errors', error: action.payload };
        default:
            return { ...state };
    }
};


// define a component

const UseCustomHookReducerComponent = () => {
    console.log('In Component');
    // Use the Custom reducer that will update the state and hence asks the React to update DOM
    const state = useStateUpdater("http://localhost:7012/api/departments", "GET",
        // {
        //     "deptno": 1220,
        //     "deptname": "HR",
        //     "location": "Delhi",
        //     "capacity": 45
        // },
        {},
        {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoibW52IiwicGFzc3dvcmQiOiJwYXNzMyJ9LCJ1c2VyUGVybWlzc2lvbnMiOlsicmVhZCJdLCJpYXQiOjE2NTE0NDM3NTksImV4cCI6MTY1MTQ0NzM1OX0.V-lBDt43Ye6JvzSZmgy9FoQDw1ygN2Omj3MZivBKm_WPINkSHDeW9NshiSmkdTyN',
        },
    );
    return (
        <div className='container'>
            <h1>using a Custom Hook That Wraps 'useEffect' and 'useReducer'</h1>
            <Fragment>
                {
                    JSON.stringify(state)
                }
            </Fragment>
        </div>
    );
};

export default UseCustomHookReducerComponent;