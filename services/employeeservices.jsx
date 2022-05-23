import axios from 'axios';

class EmployeeService{
    constructor(){
        this.url = 'http://localhost:7011';
    }
    async getData(){
        let response = await axios.get(`${this.url}/api/employees`);
        return response;
    }
    async postData(data){
        let response = await axios.post(`${this.url}/api/employees`,data,{
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return response;
    }
    async putData(data){
        let response = await axios.put(`${this.url}/api/employees/${data.empno}`,data, {
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return response;
    }

    async deleteData(id){
        let response = await axios.delete(`${this.url}/api/employees/${id}`);
        return response;
    }

    async getDataById(id){
        let response = await axios.get(`${this.url}/api/employees/${id}`);
        return response;
    }
    async searchData(data){
        let response = await axios.get(`${this.url}/api/search/${data}`);
        return response;
    }
}
export default EmployeeService;