import axios from 'axios';

class LoginService{
    constructor(){
        this.url = 'http://localhost:7011';
    }
   
    async postData(data){
        let response = await axios.post(`${this.url}/api/loginuser`,data,{
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return response;
    }
    
}
export default LoginService;