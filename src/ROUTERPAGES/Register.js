import React from "react";
import "./ROUTEPAGESCSS/registration.css";

const Register = () => {
  return (
    <div className="registerMaindiv">
      <div className="registerPage">
        <form>
          <h2>User Register</h2>
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
          <input
            type="password"
            name="password"
            placeholder="Enter Set Password"
            required
          />
          <input
            type="password"
            name="rtpassword"
            placeholder="Enter Re-type Password"
            required
          />
          <button>Register Now</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
