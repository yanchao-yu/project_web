import React from 'react'
import './HomePage.css';

const HomePage = () => {
  return (
    <>
    <div className="container">
      <div className="modules_heading">
        <p>Module Title: Title</p>
        <p>Module ID: ID</p>
        <button className="upload_projects">Upload Projects</button>
      </div>
      <div className="modules">
        {/* {modules.map(function (module, key) {
          return <Module key={key} module={module} />;
        })} */}
      </div>
    </div>

    <div className="container">
      <div className="modules_heading">
        <p>Module Title: Title</p>
        <p>Module ID: ID</p>
        <button className="upload_projects">Upload Projects</button>
      </div>
      <div className="modules">
        {/* {modules.map(function (module, key) {
          return <Module key={key} module={module} />;
        })} */}
      </div>
    </div>
  </>
  )
}

export default HomePage