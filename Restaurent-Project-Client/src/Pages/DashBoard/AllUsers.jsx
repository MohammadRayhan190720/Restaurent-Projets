import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaTrashAlt, FaUsers } from "react-icons/fa";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

  const{data : users = [],refetch} = useQuery({
    queryKey: ['users'],
    queryFn: async () =>{
      const res = await axiosSecure.get('/users');
      return res.data;
    }
  })

  const handleDelete = id =>{
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
            axiosSecure.delete(`/users/${id}`)
            .then(res =>{
              console.log(res.data)
              if(res.data.deletedCount > 0){
                Swal.fire({
                  title: "Deleted!",
                  text: "Users has been deleted.",
                  icon: "success",
                });
                refetch()
              }
            })
    
            
          }
        });
      }
  return (
    <div>
      <div>
        <h3 className="text-3xl font-semibold">Total Users: {users.length}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-white bg-amber-600 ">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    {/* <div className="avatar"> */}
                    <div>
                      <p>{user.name}</p>
                    </div>
                    {/* </div> */}
                  </div>
                </td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => {
                        handleMakeAdmin(user);
                      }}
                      className="text-white bg-orange-400 btn btn-xl"
                    >
                      <FaUsers />
                    </button>
                  )}
                </td>
                <th>
                  <button
                    onClick={() => {
                      handleDelete(user._id);
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

export default AllUsers;