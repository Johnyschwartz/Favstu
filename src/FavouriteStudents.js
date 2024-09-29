import React from "react";

function FavouriteStudents({ favourites, removeFromFavourites }) {
  return (
    <div className="div">
      <h2>Favourite Students</h2>
      <ul>
        {favourites.length > 0 ? (
          favourites.map((student) => (
            <li className="li" key={student}>
              {student} 
              <button onClick={() => removeFromFavourites(student)} className="fav-div">
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>No favourite students added yet!</p>
        )}
      </ul>
    </div>
  );
}

export default FavouriteStudents;
