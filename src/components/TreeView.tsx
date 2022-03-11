import React, { Fragment } from "react";
import Childcard from "./Card/Childcard";
import Index from "./Card/Index";

function TreeView(props: any) {
  return (
    <Fragment>
      {props.data.map((user: any, id: number) => (
        <Fragment key={id}>
          <Index user={user} />
          {/* <Childcard data={user.teamMembers} /> */}
        </Fragment>
      ))}
    </Fragment>
  );
}

export default TreeView;
