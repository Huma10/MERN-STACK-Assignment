import axios from "axios";

class ImageService{
    constructor(){
        this.url = "http://localhost:7014";
    }
    async postData(data){
        console.log(`Data = ${data}`);
        let response = await axios.post(`${this.url}/api/imageupload`,data,{
            headers:{
                'Content-Type': 'multipart/from-data'
            }
        });
        return response;
    }
}
export default ImageService;