import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn} = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  
  
  const handleGoogleSignIn = () =>{
    // console.log('google sign in clicked');
    googleSignIn()
    .then(result =>{
      const loggedUser = result.user;
      // console.log('google logged in user',loggedUser);
      const userInfo = {
        name: loggedUser.displayName,
        email: loggedUser.email,
      }
      //save user into DB
      axiosPublic.post('/users',userInfo)
      .then(res =>{
        console.log(res.data);
        navigate("/");
      })
    })
    .catch(error => {
      console.log('error in google sign in',error);
    })
    
  }

  
  return (
    <div>
      <div className="flex justify-center m-4">
        <button onClick={handleGoogleSignIn} className="flex items-center gap-2 px-4 py-2 text-gray-700 transition bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100">
          <FaGoogle className="text-red-500" />
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;