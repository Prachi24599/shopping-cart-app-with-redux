import { AiFillDelete } from "react-icons/ai";

const CartItem = ({ item, itemIndex }) => {
  return (
    <div>
      <div>
        <img src={item.image} alt="" />
      </div>
      <div>
        <h1>{item.title}</h1>
        <h2>{item.description}</h2>
        <div>
          <p>{item.price}</p>
          <div>
            <AiFillDelete />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
