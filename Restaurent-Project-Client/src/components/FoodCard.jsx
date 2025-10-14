import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const FoodCard = ({item}) => {
    const { name, image, price, recipe,_id } = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleAddToCart = (item) =>{
        // console.log(item);

        if(user && user.email){
          const cartItem = {
            menuId: _id,
            email: user.email,
            name,
            image,
            price
          }
          axios.post('http://localhost:3000/carts',cartItem)
          .then(res =>{
            // console.log(res.data);
            if(res.data.insertedId){
              Swal.fire({
                position: 'middle',
                icon: 'success',
                title: 'Food added on the cart.',
                showConfirmButton: false,
                timer: 1500
              })
            }
          })
          
          
        }else{
          Swal.fire({
            title: "You are not logged in",
            text: "Please login to order the food",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes,Login now!",
          }).then((result) => {
            if (result.isConfirmed) {
               navigate("/login",{state:{from:location}});
            }
          });
          
        }
    }


  return (
    <div className="shadow-xl card bg-base-100">
      <figure className="">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <p className='absolute right-0 p-2 mt-4 mr-6 text-white bg-slate-900'>{price}</p>
      <div className="items-center text-center card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>

        <div className="card-actions">
          <button onClick={()=>{handleAddToCart(item)}} className="mt-4 border-0 border-b-4 btn btn-outline">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;