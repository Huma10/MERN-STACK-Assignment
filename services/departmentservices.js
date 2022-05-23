import axios from 'axios';

class DepartmentService{
    constructor(){
        this.url = 'http://localhost:7011';
    }
    async getData(){
        let response = await axios.get(`${this.url}/api/departments`);
        return response;
    }
    async postData(data){
        let response = await axios.post(`${this.url}/api/departments`,data,{
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return response;
    }
    async putData(data){
        let response = await axios.put(`${this.url}/api/departments/${data.deptno}`,data, {
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return response;
    }

    async deleteData(id){
        let response = await axios.delete(`${this.url}/api/departments/${id}`);
        return response;
    }

    async getDataById(id){
        let response = await axios.get(`${this.url}/api/departments/${id}`);
        return response;
    }
}
export default DepartmentService;