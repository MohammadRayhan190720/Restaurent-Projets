import axios from "axios";


export const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
})
const useAxiosSecure = () => {

  //request interceptor
  axiosSecure.interceptors.request.use((config)=>{
    const token = localStorage.getItem('access-token')
    // console.log('interceptor working',token)
    config.headers.Authorization = `bearer ${token}`;
    return config;
  },function (error){
    return Promise.reject(error);

  })

  //response interceptor/401 and 403
  axiosSecure.interceptors.response.use((response)=>{
    return response;
  },(error)=>{
    const status = error.response.status;
    if(status === 401 || status === 403){
      
    }

    return Promise.reject(error);
  })


  return axiosSecure;

};

export default useAxiosSecure;