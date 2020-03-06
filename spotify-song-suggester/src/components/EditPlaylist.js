import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SpotifyPlayer from 'react-spotify-player';
import SuggestedSongs from "../components/SuggestedSongs";
import axios from 'axios'


function EditPlayList() {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    axios.get('https://lambda-spotify-song-suggester.herokuapp.com/api/songs')
      .then(response => {
        setSongs(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  const [trackId, setTrackId] = useState('');
  const [suggestedSongs, setSuggestedSongs] = useState([])
  useEffect(() => {
    axios.get(`https://spotify-song-suggester-05.herokuapp.com/track/${trackId.id}`)
    .then(response => {
      console.log(response.data);
      setSuggestedSongs(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }, [trackId]);

  const songList = songs.map((song, i) => {
    return (
      <div className='jams' key={i}>
        <h2>{song.track_name}</h2>
        <p>{song.artist_name}</p>
        <div className='btn-container'>
          <button className='btn' onClick={() => setTrackId(song)}>Find Similar Songs</button>
        </div>
      </div>
    )
  });
  console.log(trackId.track_name);
  const size = {
    width: '20%',
    height: 300,
  };
  const view = 'list'; // or 'coverart'
  const theme = 'black'; // or 'white'
  return (
    <div>
      <SpotifyPlayer
        uri={`spotify:track:${trackId.track_id}`}
        size={size}
        view={view}
        theme={theme}
      />
      <SuggestedSongs suggestedSongs={suggestedSongs} title={trackId.track_name} />
      <div className="SongsButton">
        {songList}
      </div>
    </div>

  );
}
export default EditPlayList;