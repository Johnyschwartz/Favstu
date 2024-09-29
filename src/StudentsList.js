import React from "react";

function StudentsList({ addToFavourites }) {
  const students = ["Praveen", "Akash", "Suresh", "Hari", "Kavin", "Mike", "Navin"];
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student} style={{ marginBottom: "10px" }}>
            {student}
            <button 
              style={{ marginLeft: "10px", backgroundColor: "black", color: "white" }}
              onClick={(event) => addToFavourites(student,event)}
            >
              Add to Favourites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentsList;
