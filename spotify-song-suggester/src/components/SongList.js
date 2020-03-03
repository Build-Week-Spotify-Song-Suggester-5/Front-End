import React from 'react';
import { SongListReducer } from '../reducers/SongListReducer';
import { connect } from 'react-redux'
import { useEffect } from 'react'
import Songs from './Songs'
import { getSong, saveSong, deleteSong } from '../actions'

// import axios from 'axios';

// export const SongList = () => {
//     return axios
//         .get(
//           "https://lambda-spotify-song-suggester.herokuapp.com/api/songs"
//         )
//         .then(res => {
//             return res;
//         });
// }

const SongList = (props) => {
    useEffect(() => {
      props.getSong();
    }, []);


    return (
        <div className="main-card-container">
          {props.songs.map((el) => (
            <Songs song={el} key={el.id} deleteSong={props.deleteSong} saveSong={props.saveSong} />
          ))}
        </div>
      );

    
    // return (
    //     <div>
    //         <h1>Songs</h1>
    //         {!props.songs && <button onClick={getSongs}>See Songs</button>}
    //         <div className=''>
    //         {props.songs && props.songs.map(music => {

    //             return (
                    
    //                 <div id={`${music.id}-box`} key={music.id} className=''>
    //                     <h2>{music.song_name}</h2>
                        
                            
                        
    //                 </div>
                    
    //             )
    //         })}
    //         </div>
    //     </div>
    // )
}

const mapStateToProps = state => {
    return state
};

export default connect(
    mapStateToProps,
    { getSong, saveSong, deleteSong}
) (SongList);