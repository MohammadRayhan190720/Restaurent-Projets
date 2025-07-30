import Cover from "./Cover";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";

const MenuCategory = ({items,img,title}) => {
  return (
    <div className="py-5">
      {title && <Cover img={img} title={title}></Cover>}

      <div className="grid grid-cols-1 gap-6 my-10 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <Link to={'/orderFood'} className="flex justify-center">
        <button className="mt-4 border-0 border-b-4 btn btn-outline">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;