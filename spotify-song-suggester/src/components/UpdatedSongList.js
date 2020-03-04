// import React, { useState, useEffect } from 'react'

// // useEffect(() => {
// //     axios.get('https://lambda-spotify-song-suggester.herokuapp.com/api/songs')
// //     .then(response => {
// //       console.log(response.data);
// //     })
// //     .catch(error => {
// //       console.log(error);
// //     })
// //   }, []);

// //   return 

//   export default class MovieList extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         movies: []
//       };
//     }
  
//     componentDidMount() {
//       axios
//         .get("https://lambda-spotify-song-suggester.herokuapp.com/api/songs")
//         .then(res => this.setState({ movies: res.data }))
//         .catch(err => console.log(err.response));
//     }
  
//     render() {
//       return (
//         <div className="movie-list">
//           {this.state.movies.map(movie => (
//             <MovieDetails key={movie.track_name} movie={movie} />
//           ))}
//         </div>
//       );
//     }
//   }
  
//   function MovieDetails({ movie }) {
//     return (
//       <Link to={`/movies/${movie.id}`}>
//         <MovieCard movie={movie} />
//       </Link>
//     );
//   }