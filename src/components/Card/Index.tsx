import React from "react";
import "./css/style.css";

function Index(props: any) {
  return (
    <div className="Card">
      <div className="profile-photo">
        <img
          alt="user"
          className="profile-photo"
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        />
      </div>
      <div className="personal-details">
        <h2>{props.user.name}</h2>
        <h5>{props.user.position}</h5>
      </div>
      <div className="team-size">{props.user.teamSize}</div>
    </div>
  );
}
export default Index;
