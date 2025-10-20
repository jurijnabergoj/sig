import "./Contact.css";
import TopBarSection from "./TopBarSection";

export default function Contact() {
  return (
    <>
      <TopBarSection mainTitle="kontakt.mainTitle" subTitle="kontakt.subTitle" />
      <main>
        <div className="contacts-page">
          <div className="contacts-info">
            <h1>Kontaktirajte nas</h1>
            <p>
              <strong>Naslov:</strong> Cankarjeva cesta 1, 1000 Ljubljana
            </p>
            <p>
              <strong>Telefon:</strong> +386 1 234 5678
            </p>
            <p>
              <strong>Email:</strong> info@primer.si
            </p>
          </div>

          <form className="contacts-form" onSubmit={(e) => e.preventDefault()}>
            <h2>Pošljite sporočilo</h2>
            <input type="text" name="name" placeholder="Vaše ime" required />
            <input type="email" name="email" placeholder="Vaš email" required />
            <textarea
              name="message"
              placeholder="Vaše sporočilo"
              rows="5"
              required
            />
            <button type="submit">Pošlji</button>
          </form>
        </div>
      </main>
    </>
  );
}
