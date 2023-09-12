import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };

  return (
    <div className="flex">
      <div>
        <img src={item.image} alt="" className="h-[180px]" />
      </div>
      <div>
        <h1 className="text-gray-700 font-semibold text-xl">{item.title}</h1>
        <h2> {item.description.split(" ").slice(0, 15).join(" ") + "..."}</h2>
        <div className="flex justify-between">
          <p>{item.price}</p>
          <div onClick={removeFromCart}>
            <AiFillDelete />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
