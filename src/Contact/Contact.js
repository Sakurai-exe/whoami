import React, { useRef } from "react";
import ContactS from "./Contact.module.css";
import BusinnessCard from "../BusinnessCard/BusinnessCard";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8px4lda",
        "template_nrzg1zk",
        form.current,
        "iDRKEkSo8yILNw9Nb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className={ContactS.Contact}>
      <div className={ContactS.Content}>
        <h2>Contact me</h2>
        <p>
          If you have other request or question, don’t <br />
          hesitate to use the form.
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" required placeholder="Name" name="name" />
        <input type="email" required placeholder="Email" name="email" />
        <input type="text" required placeholder="Subject" name="subject" />
        <textarea required placeholder="Message" name="message" />
        <input className={ContactS.FormButton} type="submit" value="Send" />
      </form>
      <div className={ContactS.BusinnessCard}><BusinnessCard /></div>
    </div>
  );
}

export default Contact;
