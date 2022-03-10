import React, { Fragment } from "react";
import ChildCard from "./Card/Childcard";
import Index from "./Card/Index";

// const data = [
//   {
//     name: "Vera Mayo",
//     position: "CEO",
//     teamSize: 9,
//     id: 5000,
//     children: [
//       {
//         name: "Lenore Peters",
//         position: "CEO",
//         teamSize: 9,
//         id: 1,
//         children: [],
//       },
//       {
//         name: "Inga Snyder",
//         position: "CEO",
//         teamSize: 9,
//         id: 2,
//         children: [
//           {
//             name: "Lenore Peters",
//             position: "CEO",
//             teamSize: 9,
//             id: 11,
//           },
//           {
//             name: "Lenore Peters",
//             position: "CEO",
//             teamSize: 9,
//             id: 12,
//           },
//         ],
//       },
//       {
//         name: "Oliver Mayer",
//         position: "CEO",
//         teamSize: 9,
//         id: 3,
//         children: [
//           {
//             name: "Lenore Peters",
//             position: "CEO",
//             teamSize: 9,
//             id: 111,
//             children: [
//               {
//                 name: "Lenore Peters",
//                 position: "CEO",
//                 teamSize: 9,
//                 id: 1111,
//               },
//             ],
//           },
//           {
//             name: "Lenore Peters",
//             position: "CEO",
//             teamSize: 9,
//             id: 121,
//           },
//         ],
//       },
//       {
//         name: "Honorato Conner",
//         position: "CEO",
//         teamSize: 9,
//         id: 4,
//         children: [],
//       },
//       {
//         name: "Vera Mayo",
//         position: "CEO",
//         teamSize: 9,
//         id: 5,
//         children: [],
//       },
//     ],
//   },
// ];

function TreeView(props: any) {
  return (
    <Fragment>
      {props.data.map((user: any, id: number) => (
        <>
          <Index user={user} />
          <TreeView data={user.children} />
        </>
      ))}
    </Fragment>
  );
}

export default TreeView;
