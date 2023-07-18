import { products } from "../../Data/Data";
import Products from "./Products";

function PopularProduct() {
  return (
    <section className="container min_100vh">
      <div className="popular-container">
        <div className="title">
          Popular <span>Products</span>
        </div>
        <div className="nextAndPrev">
          <div>Prev</div>
          <span>|</span>
          <div>Next</div>
        </div>
      </div>
      <div className="product-container">
        {products.map((product) => {
          return <Products key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
}

export default PopularProduct;
