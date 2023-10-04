import React from 'react'

const Stu_Application = () => {
  return (
    <div className="container">
      <p className="title">Student Page</p>
      <p className="subtitle">Application Email Page</p>

      <form onSubmit={(e) => e.preventDefault()} className="form">
        {/* <label htmlFor="Assignment" className="inline">
          File Upload
          <input type="file" name="Assignment" id="Assignment" />
        </label> */}

        <div className="flex">
          <label htmlFor="ModuleTitle" className="inline">
            Module Title
            <input type="text" name="ModuleTitle" id="ModuleTitle" className="inline-input" placeholder="Module Title"/>
          </label>
          <label htmlFor="ModuleId" className="inline">
            Module ID
            <input type="text" name="ModuleId" id="ModuleId" className="inline-input" placeholder="Module ID"/>
          </label>
         
        </div>

        <div className="flex">
          <label htmlFor="ProjectId" className="inline">
            Project ID
            <input type="text" name="ProjectId" id="ProjectId" className="inline-input" placeholder="Module Title"/>
          </label>
          <label htmlFor="Title" className="inline">
            Title
            <input type="text" name="Title" id="Title" className="inline-input" placeholder="Module ID"/>
          </label>
         
        </div>

        <div className="flex">
          <label htmlFor="Supervisor" className="inline">
            Supervisor
            <input type="text" name="Supervisor" id="Supervisor" className="inline-input" placeholder="Supervisor"/>
          </label>
        </div>
        <div className="flex">
          <label htmlFor="AppTitle" className="inline">
            Application Title
            <input type="text" name="AppTitle" id="AppTitle" className="inline-input2" placeholder="Application Title" />
          </label>
        </div>
        <label htmlFor="Description" className="block">
          Personal Statement
          <textarea type="text" name="Description" id="Description" className="block-input" placeholder="Description"/>
        </label>

        <div className="flex">
          <label htmlFor="Assignment2" className="block">
            Please upload your CV
            <input type="file" accept=".csv" name="Assignment2" id="Assignment2" />
          </label>
          {/* <label htmlFor="Comments" className="block">
            Additional Comments
            <input type="text" name="Comments" id="Comments" className="inline-input" placeholder="Comments"/>
          </label> */}
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  )
}

export default Stu_Application