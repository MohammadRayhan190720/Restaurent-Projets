import Cover from "./Cover";
import MenuItem from "./MenuItem";

const MenuCategory = ({items,img,title}) => {
  return (
    <div className="py-5">
      {title && <Cover img={img} title={title}></Cover>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;