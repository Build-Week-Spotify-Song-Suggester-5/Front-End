import React from "react";



const SongTable = props => {
  const { songs, removeSong, editRow } = props;

  return (
    <table className= "table">
      <thead>
        <tr className="playlist">
          <th>Artist</th>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className="playlist">
        {songs.length > 0 ? (
          songs.map(song => (
            <tr key={song.id}>
              <td>{song.artist}</td>
              <td>{song.title}</td>
              <td>
                <button className="fav-button" onClick={() => editRow(song)}>Edit</button>
                <button className="fav-button" onClick={() => removeSong(song.id)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No Songs</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
export default SongTable;