import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../components/shared/SectionTitle";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hoisting_key = import.meta.env.VITE_IMAGE_HOISTING_KEY;
const image_hoisting_api = `https://api.imgbb.com/1/upload?key=${image_hoisting_key}`;

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
      // console.log(data);
    //image upload to imgbb and get an URL
    const imageFile = { image: data.fileInput[0] };
    const res = await axiosPublic.post(image_hoisting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
      if (res.data.success) {
   //now send menu item data to server
   const menuItem = {
     name: data.name,
     recipe: data.recipe,
     price: parseInt(data.price),
     category: data.category,
     image: res.data.data.display_url,
   };

   const menuRes = await axiosSecure.post("/menu", menuItem);
   console.log(menuRes.data);
   if (menuRes.data.insertedId) {
     //show success message
     Swal.fire({
       position: "top-end",
       icon: "success",
       title: `${data.name} Added to the menu`,
       showConfirmButton: false,
       timer: 1500,
     });
   }
 }
 console.log(res.data);
 reset();    
}

  return (
    <>
      <div>
        <SectionTitle
          heading={"Add An ITem"}
          subHeading={"Whats's New ?"}
        ></SectionTitle>
      </div>
      <div className="max-w-3xl p-4 mx-auto bg-gray-200 rounded shadow">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 mb-4">
            <label
              htmlFor="recipeName"
              className="block mb-2 font-medium text-gray-700"
            >
              Recipe Name
            </label>
            <input
              type="text"
              id="recipeName"
              {...register("name", { required: true })}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter recipe name"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                htmlFor="price"
                className="block mb-2 font-medium text-gray-700"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                {...register("price", { required: true })}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter price"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="category"
                className="block mb-2 font-medium text-gray-700"
              >
                Category
              </label>
              <select
                id="category"
                defaultValue={"default"}
                {...register("category", { required: true })}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="pizza">Pizza</option>
                <option value="desert">Desert</option>
                <option value="salad">Salad</option>
                <option value="soups">Soups</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="recipeDetails"
              className="block mb-2 font-medium text-gray-700"
            >
              Recipe Details
            </label>
            <textarea
              id="recipeDetails"
              {...register("recipe", { required: true })}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter detailed recipe instructions"
              rows="4"
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              htmlFor="fileInput"
              className="block mb-2 font-medium text-gray-700"
            >
              Upload File
            </label>
            <input
              type="file"
              id="fileInput"
              {...register("fileInput", { required: true })}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center w-full gap-2 px-4 py-2 text-white rounded bg-gradient-to-l from-orange-900 to-orange-400"
          >
            Add Recipe
            <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </>
  );
};

export default AddItems;