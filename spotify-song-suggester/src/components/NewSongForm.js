import React, { useState } from "react";

const NewSongForm = props => {
  const { addSong } = props;

  const initialState = {
    id: null,
    artist: "",
    title: ""
  };

  const [song, setSong] = useState(initialState);

  const handleChange = event => {
    const { name, value } = event.target;
    setSong({ ...song, [name]: value }); // Dynamic
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!song.artist || !song.title) return;
    addSong(song);
    setSong(initialState);
  };

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <label className="playlist">Artist: </label>
      <input
        type="text"
        name="artist"
        value={song.name}
        onChange={handleChange}
      />
      <label className="playlist">Title: </label>
      <input
        type="text"
        name="title"
        value={song.username}
        onChange={handleChange}
      />
      {/* Circle back to this. Antd might cause problems */}
      <input type="submit" value="Add Song" />
    </form>
  );
};

export default NewSongForm;