import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../components/shared/SectionTitle";
import { CiEdit } from "react-icons/ci";
import useMenu from "../../hooks/useMenu";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItem = () => {
  const [menu, loading, refetch] = useMenu();
  // console.log(menu)
  const axiosSecure = useAxiosSecure();

  const handleDelete = (item) => {
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
        axiosSecure.delete(`/menu/${item._id}`)
        .then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${item.name} has been deleted.`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleUpdate = (id) => {
    console.log(id);
  };
  return (
    <div>
      <div>
        <SectionTitle
          heading={"Manage All Items"}
          subHeading={"Hurry Up !"}
        ></SectionTitle>
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-12 h-12 mask mask-squircle">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>$ {item.price}</td>
                <th>
                  <Link to={`/dashboard/updateItems/${item._id}`}>
                    <button
                      onClick={() => {
                        handleUpdate(item._id);
                      }}
                      className="text-white btn btn-ghost btn-xl bg-amber-600"
                    >
                      <CiEdit className="text-xl" />
                    </button>
                  </Link>
                </th>
                <th>
                  <button
                    onClick={() => {
                      handleDelete(item);
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

export default ManageItem;
