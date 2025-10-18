import React from 'react';
import useCart from '../../hooks/useCart';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import SectionTitle from '../../components/shared/SectionTitle';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

const MyCart = () => {

  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  console.log(totalPrice);
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    // console.log(id)

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`)
        .then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="border">
        <SectionTitle
          Heading="Wanna add More?"
          subHeading="My Cart"
        ></SectionTitle>
      </div>

      <div className="flex items-center justify-between my-5">
        <h3 className="text-3xl font-semibold uppercase">
          Total Orders : {cart.length}
        </h3>

        <h3 className="text-3xl font-semibold uppercase">
          Total Price : ${totalPrice}
        </h3>

        {cart.length ? (
          <Link to={"/dashboard/payment"}>
            <button className="text-white btn bg-amber-500">Pay</button>
          </Link>
        ) : (
          <button disabled className="text-white btn bg-amber-500">
            Pay
          </button>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-white bg-amber-600 ">
            <tr>
              <th></th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-12 h-12 mask mask-squircle">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>$ {item.price}</td>
                <th>
                  <button
                    onClick={() => {
                      handleDelete(item._id);
                    }}
                    className="text-white bg-red-600 btn btn-ghost btn-xl"
                  >
                    <FaTrashAlt />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;