import React, { Fragment, useState } from 'react';
import axios from 'axios';
import ImageService from '../../services/imageservice';

const ImageUploadComponent = () =>{

    const [userInfo,setUserInfo] = useState({
        file:[],
        filePreview:null,
    });
    const serv = new ImageService();
    const [isSuccess, setSuccess] = useState(null);
    const handleInputChange=(evt)=>{
        setUserInfo({
            ...userInfo,
            file:evt.target.files[0],
            filePreview:URL.createObjectURL(evt.target.files[0]),
        });
    }
    const Submit= async()=>{
        const data = new FormData();
        data.append('avatar',userInfo.file);

        serv.postData(data).then((response)=>{
            console.warn(response);
            if(response.data.success === 1){
                setSuccess("Image upload successfully")
            }
            
        }).catch((error)=>{
            console.log('is this called...');
           console.error(error);
        }); 
        // axios.post("http://localhost:7014/api/imageupload",data,{
        //         headers:{"Content-Type":"multipart/from-data"}
        // })
        // .then((response)=>{console.warn(response);
        //     if(response.data.success === 1){
        //         setSuccess("Image upload successfully")
        //     }
        // }).catch((error)=>{console.error(error);})
    }
    return(
        <Fragment>
            <div className='conatiner mr-60'>
                <h3 className='text-center'>Image Uplaod</h3>
                {isSuccess!==null ? <h4>{isSuccess}</h4>:null}
                <div className='form-group'>
                    <label htmlFor="" className='text-white'>Upload Image:</label>
                    <input type="file" className='form-control' name='avatar' onChange={handleInputChange}></input>
                </div>
                <div className='form-group'>
                    <button type='submit' className='btn btn-dark' onClick={()=>Submit()}>Save</button>
                </div>
            </div>
            {userInfo.filePreview !==null ? <img className='previewimg' src={userInfo.filePreview} alt="Upload"/>:null}
        </Fragment>
    );
}
export default ImageUploadComponent;