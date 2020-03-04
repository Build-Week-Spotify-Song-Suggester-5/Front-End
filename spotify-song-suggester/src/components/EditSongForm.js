import React, { useState } from "react";

const EditSongForm = props => {
  const { setEditing, editing, currentSong, updateSong } = props;

  const [song, setSong] = useState(currentSong);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setSong({ ...song, [name]: value });
  };

  return (
    <form className= "playlist"
      onSubmit={event => {
        event.preventDefault();
        updateSong(song.id, song);
      }}
    >
      <label className="playlist">Artist</label>
      <input
        type="text"
        name="artist"
        value={song.artist}
        onChange={handleInputChange}
      />
      <label className="playlist">Title</label>
      <input
        type="text"
        name="title"
        value={song.title}
        onChange={handleInputChange}
      />
      <button className="fav-button">Update Song</button>
      <button className="fav-button" onClick={() => setEditing(false)}>Cancel</button>
    </form>
  );
};

export default EditSongForm;