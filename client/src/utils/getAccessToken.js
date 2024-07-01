import Cookies from 'js-cookie';

const getAccessToken=()=>{
    const accessToken=Cookies.get('access_token')
    console.log(accessToken);
    return accessToken;
}

export default getAccessToken;