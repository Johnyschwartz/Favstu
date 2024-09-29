import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import StudentsList from "./StudentsList";
import FavouriteStudents from "./FavouriteStudents";

function App() {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (student, event) => {
    var btn = event.target;
    btn.style.opacity = 0.5; 
    if (!favourites.includes(student)) {
      setFavourites([...favourites, student]);
    }
  };

  const removeFromFavourites = (student) => {
    setFavourites(favourites.filter((fav) => fav !== student));
  };

  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <nav>
          <Link to="/students">Students List</Link> | 
          <Link to="/favourites">Favourite Students</Link>
        </nav>
        <Routes>
          <Route
            path="/students"
            element={<StudentsList addToFavourites={addToFavourites} />}
          />
          <Route
            path="/favourites"
            element={<FavouriteStudents favourites={favourites} removeFromFavourites={removeFromFavourites} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
