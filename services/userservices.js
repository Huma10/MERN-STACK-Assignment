import axios from "axios";

class UserService{
    constructor(){
        this.url = "http://localhost:7011";
    }
    async postData(data){
        let response = await axios.post(`${this.url}/api/register`,data,{
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return response;
    }
    async authData(data){
        console.log(`user = ${data.username}`);
        let response = await axios.post(`${this.url}/api/authuser`,data,{
            headers:{
                'Content-Type': 'application/json',
            }
        });
        return response;
    }
    async getDeptData(token){
        console.log(`${token}`);
        let response = await axios.get(`${this.url}/api/departments`,{
            headers:{
                'Authorization': 'Bearer '+token
            }
        });
        return response;
    }
}
export default UserService;