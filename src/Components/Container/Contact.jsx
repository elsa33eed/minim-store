export default function Contact() {
  return (
    <section className="contact_container">
      <div>
        <div className="title">Contact Us</div>
        <p>Send your name and email; we will contact you in 24 hours.</p>
      </div>
      <form>
        <div className="inputs">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </div>
        <button>Send</button>
      </form>
    </section>
  );
}
