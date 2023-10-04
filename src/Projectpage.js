// import React from 'react'

// const Projectpage = () => {
//   return (
//     <>
//       <div className="container">
//         {project ? (
//           <>
//             <div className="modules_heading">
//               <p>Module Title: {project.module_name}</p>
//               <p>Module ID: {project.m_id}</p>
//             </div>

//             <div className="project">
//               <div className="project_head">
//                 <p>Project ID - {project_id}</p>
//                 <p>Title - {project.project_name}</p>
//               </div>
//               <div className="project_content">
//                 <div className="project_difficulty">
//                   <span>Difficultu Level - </span>
//                   {(() => {
//                     const stars = [];
//                     for (let i = 0; i < project.difficulty_level; i++) {
//                       stars.push(<img src={star} key={i + 1} alt="star" />);
//                     }
//                     return <div>{stars}</div>;
//                   })()}
//                 </div>
//                 <div>
//                   {requiredSkills.length > 0 ? (
//                     <>
//                       <span>Required Skills - </span>
//                       <ul className="list">
//                         {requiredSkills.map(function (skill, key) {
//                           return <li key={key}>{skill["name"]}</li>;
//                         })}
//                       </ul>
//                     </>
//                   ) : (
//                     <></>
//                   )}
//                 </div>
//                 <div>
//                   <span>
//                     Capacity: {project.filled_capacity}/
//                     {project.required_capacity}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </>
//         ) : (
//           <></>
//         )}
//       </div>
//     </>
//   )
// }

// export default Projectpage