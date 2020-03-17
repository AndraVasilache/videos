import React from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { video: [] };

  onTermSubmit = async term => {
    youtube.get("/search", {
      params: {
        q: term
      }
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

// AIzaSyDjJzPOuF5WfFG_-HJiZRKkFaR8urMBMuw

export default App;
