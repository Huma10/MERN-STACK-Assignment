import React, { Fragment, useState } from 'react';
import UserService from '../../services/userservices';

const SecuredRestComponent = () =>{
    const [user,setUser] = useState({username:'',password:''});
    const [login,setLogin] = useState({uname:'',pass:''})
    const [message, setMessage] = useState('');
    const [loginmsg,setLoginMsg] = useState('');
    const [records,setRecords] = useState([]);
    const [token,setToken] = useState('');
    const serv = new UserService();
    const handleChange = (evt) =>{
        setUser({...user,[evt.target.name]:evt.target.value})
    }
    const handleInputChange = (evt) =>{
        setLogin({...login,[evt.target.name]:evt.target.value});
    }
    const clear = () =>{
        setUser({username:'',password:''});
    }
    const createUser = () =>{
        const data = {
            username:user.username,
            password:user.password
        }
        serv.postData(data).then(
            
            (response)=>{setMessage(`${response.data.message}`)}
        ).catch((error)=>{
            setMessage('Error Occured')
        });
    }
    const loginUser = () =>{
        const data = {
            username:login.uname,
            password:login.pass
        }
        serv.authData(data).then(
            (response)=>{setLoginMsg(`${response.data.message}`)
           setToken(response.data.token);
        }
        ).catch((error)=>{
            setLoginMsg('Error Occured')
        });
    }
    const getDept = () =>{
        serv.getDeptData(token).then((response)=>{
            setLoginMsg(response.message);
            setRecords(response.data.data);
        }).catch((error)=>{
            setLoginMsg('Error Occured ');
        });
    }
return(
    <Fragment>
        <div className='container mt-5'>
        
            <h1 className='text-center'>Secured Rest Api Call</h1>
            <h1>Create User</h1>
           <div className='form-group'>
               <label htmlFor="">Username</label>
               <input type="text" name="username" id="" value={user.username} onChange={handleChange} className='form-control'/>
           </div>    
           <div className='form-group'>
                <label htmlFor="">Password</label>
               <input type="password" name="password" id="" value={user.password} onChange={handleChange} className='form-control'/>
           </div>
           <div className='container text-center mt-3 '>
           <div className='container'>
            <strong>{message}</strong>
            </div>
               <button type='button' className='btn btn-success' onClick={createUser}>Create User</button>| 
               <button type='button' className='btn btn-success' onClick={clear}>Clear</button>
           </div>

           {/* Login */}
           {/* <h1 className='text-center'>Secured Rest Api Call</h1> */}
            <h1>Login User</h1>
           <div className='form-group'>
               <label htmlFor="">Username</label>
               <input type="text" name="uname" id="" value={login.uname} onChange={handleInputChange} className='form-control'/>
           </div>    
           <div className='form-group'>
                <label htmlFor="">Password</label>
               <input type="password" name="pass" id="" value={login.pass} onChange={handleInputChange} className='form-control'/>
           </div>
           <div className='container text-center mt-3 '>
           <div className='container'>
            <strong>{loginmsg}</strong>
            </div>
               <button type='button' className='btn btn-success' onClick={loginUser}>Login</button>| 
               <button type='button' className='btn btn-success' onClick={clear}>Clear</button>
           </div>
        </div>
        <div className='container'>
            <button onClick={getDept} className="btn btn-secondary">Get Dept</button>
        </div>
        <strong>  {JSON.stringify(records)}   </strong>
    </Fragment>
);
}
export default SecuredRestComponent;