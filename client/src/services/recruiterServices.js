import axios from "axios";
import getAccessToken from "../utils/getAccessToken";

class RecruiterServices{

    constructor(){
        this.api=String(import.meta.env.VITE_APP_BACKEND);
    }

    async addJob(data){
        try {
            const access_token=getAccessToken();
            const response=await axios.post(`${this.api}/jobs/add-job`,data,{
                headers:{
                    Authorization:`Bearer ${access_token}`,
                    "Content-Type": "application/json",
                }
            });
            console.log(response.status);

            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}


export default new RecruiterServices();