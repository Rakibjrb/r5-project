import React from "react";
import "./ROUTEPAGESCSS/user.css";

const User = () => {
  return (
    <div className="userCartMainDiv">
      <h1>User Profile</h1>
      <div className="userCart">
        <img src="./img/profile1.png" alt="userPic" />
        <h2>Rakibul Hasan</h2>
        <h4>rakibjrb572157@gmail.com</h4>
        <h4>I love buy Gadeges</h4>
        <div className="buttons">
          <button>
            <i className="far fa-edit fa-2x"></i>
          </button>
          <button>
            <i className="far fa-trash-alt fa-2x"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
