import axios from 'axios';

class OrderService{
    constructor(){
        this.url = 'http://localhost:5006';
    }
    async getData(){
        let response = await axios.get(`${this.url}/api/processorder`);
        return response;
    }
    async postData(data){
        let response = await axios.post(`${this.url}/api/order`,data,{
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return response;
    }
}
export default OrderService;