import { HiOutlineHeart } from "react-icons/hi";

function Products({ img, name, price }) {
  return (
    <div className="product">
      <img src={img} alt={name} className="product-img" />
      <div className="nameAndPrice">
        <div className="name">{name}</div>
        <div className="price">${price}</div>
      </div>
      <div className="btns">
        <button>Add to Cart</button>
        <HiOutlineHeart className="heart" />
      </div>
    </div>
  );
}

export default Products;
