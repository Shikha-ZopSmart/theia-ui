
import React from 'react'

function Childcard1(props:any) {
    return (
        <div className="Card1">
        <div className="profile-photos">
            <img alt="user" className="profile-photos" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
        </div>
        <div className="personal-data">
          <h2>{props.user.name}</h2>
          <h5>{props.user.position}</h5>
        </div>
        <div className="team-member" color='white'>{props.user.teamSize}
        </div>
    </div>
  
    )
}
export default Childcard1;