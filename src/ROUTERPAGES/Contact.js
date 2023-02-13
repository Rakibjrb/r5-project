import React from "react";
import "./ROUTEPAGESCSS/registration.css";

const Contact = () => {
  return (
    <div className="registerMaindiv">
      <div className="registerPage">
        <form>
          <h2>Contact Us</h2>
          <input
            type="text"
            name="name"
            placeholder="Enter Name Here"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email Here"
            required
          />
          <textarea
            type="text"
            name="message"
            placeholder="Write your message here"
            required
          ></textarea>
          <button>Register Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
