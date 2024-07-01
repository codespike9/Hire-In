import Cookies from 'js-cookie';

const deleteAccessToken=()=>{
    console.log("object");
    Cookies.set('access_token');
}

export default deleteAccessToken;