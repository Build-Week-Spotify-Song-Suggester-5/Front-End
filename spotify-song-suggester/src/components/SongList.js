import React, {useState, useEffect} from 'react';
import axios from 'axios';



function SongList() {
  
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

  // const [trackId, setTrackId] = useState('');
  // useEffect(() => {
  //   axios.get(`https://spotify-song-suggester-05.herokuapp.com/track/${trackId}`)
  //   .then(response => {
  //     console.log(response);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })
  // }, [])

  const findSong = () => {
    axios.get(`https://spotify-song-suggester-05.herokuapp.com/track/0BRjO6ga9RKCKjfDqeFgWV`)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
  }

 
  const songList = songs.map((song, i) => {
    return (
        <div key={i}>
            <h2>{song.track_name}</h2>
            <p>{song.artist_name}</p>
            <button onClick={() => console.log(song.track_id)}>Find Similar Songs</button>
        </div>
    )
  });

  return (
    <div className="SongsButton">
      {findSong()}
      {songList}
    </div>
  );
}

export default SongList;
