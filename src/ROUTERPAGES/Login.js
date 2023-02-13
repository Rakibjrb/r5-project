import React from "react";
import "./ROUTEPAGESCSS/registration.css";

const Login = () => {
  return (
    <div className="registerMaindiv">
      <div className="registerPage">
        <form>
          <h2>User Login</h2>
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
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
