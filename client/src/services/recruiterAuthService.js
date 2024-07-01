import axios from "axios";


class RecruiterAuthServices{
    constructor(){
        this.api=String(import.meta.env.VITE_APP_BACKEND);
    }

    async recruiterRegistration(data){
        try {
            const response=await axios.post(`${this.api}/employer/employer-registration`,data,{})
            console.log(response.data.user);

            return response.data.user;
        } catch (error){
            console.error(error);
            throw error;
        }
    }

    async recruiterLogin(data) {
        try {
          const response = await axios.post(
            `${this.api}/employer/employer-login`,
            data,
            {
              withCredentials: true, // This ensures cookies are included in the request
            }
          );
          console.log(response.data.access_token);
          return response.data.user;
        } catch (error) {
          console.error("Error in recruiter sign in: ", error);
          throw error;
        }
      }
}

export default new RecruiterAuthServices()