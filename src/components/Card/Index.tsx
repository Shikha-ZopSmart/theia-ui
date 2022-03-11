import React, { useState } from "react";
import ChildCard from "./Childcard1";
import "./css/style.css";

function Index(props: any) {
  const [show, setShow] = useState(false);
  return (
    <div className="main" >
      <div className="Card" onClick={() => {
        console.log("clicked")
        setShow(!show)
      }}>
        <div className="profile-photo">
          <img
            alt="user"
            className="profile-photo"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
          />
        </div>
        <div className="personal-details">
          <h2>{props.user.name}</h2>
          <h2>{props.user.role}</h2>
        </div>
        <div className="team-size">{props.user.teamMembers?.length}</div>
      </div>
      <div className="teamMembers">
        {
          show && props.user.teamMembers
            ? props.user.teamMembers.map((us: any) => <ChildCard key={us.id} user={us} />)
            : null
        }
        
      </div>
    </div>

  );
}
export default Index;
