import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import EditPlaylist from "./EditPlaylist";
import Nav from './Nav'

export const Dashboard = props => {
  const id = props.match.params.id;

  console.log(props, id);

  return (
    <div>
      <Nav />
      <header className="dashboard">
        <h1>Welcome to your Dashboard!</h1>
        <h1>Choose from list of songs below:</h1>
      </header>
      <Link to="/suggested-songs" className="suggestions">
        <h1>Suggested Songs</h1>
      </Link>
      <EditPlaylist />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps, {})(Dashboard);