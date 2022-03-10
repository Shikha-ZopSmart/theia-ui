import React, { Fragment } from "react";
import Childcard from "./Card/Childcard";
import Index from "./Card/Index";

const data = [
  {
    
      id: "0",
      name: "Anurag Lingam",
      role: "Team Lead",
      photo: "#",
      teamMembers: [
        {
          id: "1",
          name: "Avadhanam Anantha Sai",
          role: "Intern",
          photo: "#"
        },
        {
          id: "2",
          name: "Ayush Agarwal",
          role: "Intern",
          photo: "#"
        },
        {
          id: "3",
          name: "Divij Agarwal",
          role: "Intern",
          photo: "#"
        },
        {
          id: "4",
          name: "Nikhil Chandna",
          role: "Intern",
          photo: "#"
        },
        {
          id: "5",
          name: "Rajesh Pullagura",
          role: "Intern",
          photo: "#",
          teamMembers: [
            {
              id: "1",
              name: "Avadhanam Anantha Sai",
              role: "Intern",
              photo: "#"
            },
            {
              id: "2",
              name: "Ayush Agarwal",
              role: "Intern",
              photo: "#"
            },
            {
              id: "3",
              name: "Divij Agarwal",
              role: "Intern",
              photo: "#"
            },
            {
              id: "4",
              name: "Nikhil Chandna",
              role: "Intern",
              photo: "#"
            },
            {
              id: "5",
              name: "Rajesh Pullagura",
              role: "Intern",
              photo: "#"
            },
            {
              id: "6",
              name: "Rakshita Middha",
              role: "Intern",
              photo: "#",
              teamMembers: [
                {
                  id: "1",
                  name: "Avadhanam Anantha Sai",
                  role: "Intern",
                  photo: "#"
                },
                {
                  id: "2",
                  name: "Ayush Agarwal",
                  role: "Intern",
                  photo: "#"
                },
                {
                  id: "3",
                  name: "Divij Agarwal",
                  role: "Intern",
                  photo: "#"
                },
                {
                  id: "4",
                  name: "Nikhil Chandna",
                  role: "Intern",
                  photo: "#"
                },
                {
                  id: "5",
                  name: "Rajesh Pullagura",
                  role: "Intern",
                  photo: "#"
                },
                {
                  id: "6",
                  name: "Rakshita Middha",
                  role: "Intern",
                  photo: "#"
                },
                {
                  id: "7",
                  name: "Shikha",
                  role: "Intern",
                  photo: "#"
                }
              ]
            },
            {
              id: "7",
              name: "Shikha",
              role: "Intern",
              photo: "#"
            }
          ]
        },
        {
          id: "6",
          name: "Rakshita Middha",
          role: "Intern",
          photo: "#"
        },
        {
          id: "7",
          name: "Shikha",
          role: "Intern",
          photo: "#"
        },
      ],
    },
      
];

function TreeView(props: any) {
  return (
    <Fragment>
      {props.data.map((user: any, id: number) => (
        <Fragment key={id}>
          <Index user={user} />
       
          <Childcard data={user.teamMembers} />
        </Fragment>
      ))}
    </Fragment>
  );
}

export default TreeView;
