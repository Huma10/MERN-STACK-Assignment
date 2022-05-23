import React, {useState, Fragment} from 'react';
import {useDispatch} from 'react-redux';
import {login} from './../action/action'

const LoginUserSAGAComponents=()=>{
    const [user,setUser] = useState({username:'',password:''});

    const [message, setMessage] = useState("");
    

    // define a dispatch object

    const dispatch = useDispatch();


    const loginUser=()=>{
        dispatch(login(user));    
    };
    const clear=()=>{
        // reset department properties
        setUser({username:'',password:''});
    }

    return(
        <Fragment>
            <div className='container'>
                <h1>Login</h1>
                {message}
                <div className='form-group'>
                    <label htmlFor="">Username</label>
                <input type="text" value={user.username} onChange={(evt)=>setUser({...user, username:(evt.target.value)})} className="form-control"></input>
                </div>
                <label htmlFor="">Passowrd</label>
                <div className='form-group'>
                <input type="text" value={user.password} onChange={(evt)=>setUser({...user, password:(evt.target.value)})} className="form-control"></input>
                </div>
                <div className='form-group'>
                <input type="button" className='btn btn-warning' value="Clear"
                 onClick={clear}/>
                <input type="button" className='btn btn-success' value="Login" onClick={loginUser}/>
            </div>
            </div>
        </Fragment>
    );
}
export default LoginUserSAGAComponents;