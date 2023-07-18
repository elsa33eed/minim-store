import { shoppingImgs } from "../../Data/Data";

function Shopping() {
  return (
    <section className="container">
      {shoppingImgs.map((shopImg) => {
        return (
          <div className="shopping" key={shopImg.id}>
            <img src={shopImg.img} alt={shopImg.title} />
            <div>
              <div className="title">{shopImg.title}</div>
              <p>{shopImg.text}</p>
              <a href="" className="shopBtn">
                {shopImg.btnText}
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Shopping;
