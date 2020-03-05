import React from "react";
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