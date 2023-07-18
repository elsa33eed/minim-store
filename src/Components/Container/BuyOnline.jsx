import { buyOnlineDatas } from "../../Data/Data";

function BuyOnline() {
  return (
    <section className="container">
      <div className="title">
        When You <span>Buy Online</span>
      </div>
      <div className="buyOnline">
        {buyOnlineDatas.map((buyOnline) => {
          return (
            <div className="data" key={buyOnline.id}>
              <div className="data-title">{buyOnline.title}</div>
              <p>{buyOnline.text}</p>
              <a href="" className="btn-text">
                {buyOnline.btnText}
              </a>
              <div className="payment-image">
                {buyOnline.img?.map((img, index) => (
                  <img
                    className="payment-img"
                    src={img}
                    alt="Payment Credit"
                    key={index}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default BuyOnline;
