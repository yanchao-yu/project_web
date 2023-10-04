import React, { useState } from "react";
// import { CSVLink } from "react-csv";
import "./Stu_record.css";


function Stu_record() {
  const [students, setStudents] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      const data = reader.result;
      const students = data.split("\n").map((row) => {
        const [id, name] = row.split(",");
        return {
          id,
          name,
          email: `${id}@live.napier.ac.uk`,
          appliedProjects: "",
          assignedProject: "",
        };
      });
      setStudents(students);
    };
  };

  const handleProjectSelection = (event, student) => {
    student.appliedProjects = event.target.value;
    setStudents([...students]);
  };

  const handleProjectAssignment = (event, student) => {
    student.assignedProject = event.target.value;
    setStudents([...students]);
  };

  const headers = [
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Applied Projects", key: "appliedProjects" },
    { label: "Assigned Project", key: "assignedProject" },
  ];

  return (
    <div className="container">
    <h1>Edinburgh Napier University</h1> 
    <h2>Student Record Page</h2>
    <form>
      <label>Module Title:
        <input type="text" />
      </label>
      <label>Module ID:
        <input type="text" />
      </label>
    </form>
   
      <input type="file" onChange={handleFileUpload} />
      {students.length > 0 && (
        <>
          <table border="1">
            <thead>
              <tr>
                {headers.map((header) => (
                  <th key={header.key}>{header.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>
                    <select
                      value={student.appliedProjects}
                      onChange={(event) =>
                        handleProjectSelection(event, student)
                      }
                    >
                      <option value="">--Select Project--</option>
                      <option value="Project A">Project A</option>
                      <option value="Project B">Project B</option>
                      <option value="Project C">Project C</option>
                    </select>
                  </td>
                  <td>
                    <input
                      defaultValue={student.assignedProject}
                      onChange={(event) =>
                        handleProjectAssignment(event, student)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <CSVLink data={students} headers={headers} filename="student_allocation.csv" >
           <button>Export CSV</button> 
          </CSVLink>
          
        </>
      )}
       {students.length === 0 && (
        <table border="1">
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header.key}>{header.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5}>No data available</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Stu_record;
