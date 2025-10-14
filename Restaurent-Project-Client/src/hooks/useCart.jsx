import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


  
const useCart = () => {

  const axiosSecure = useAxiosSecure();

  const {data: cart = [] }= useQuery({
    queryKey: ['cart'],
    queryFn: async()=>{
      const res =await axiosSecure.get('/carts');
      // console.log('res from axios',res);
      return res.data;
    }
  })
  return [cart];

};

export default useCart;