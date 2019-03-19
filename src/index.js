import React from "react";
import ReactDOM from "react-dom";
import DisplaySeason from "./DisplaySeason";

class App extends React.Component {
  state = { lat: null, error: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      error => {
        this.setState({ error: error.message });
      }
    );
  }

  render() {
    if (this.state.error && !this.state.lat) {
      return <div>Error: {this.state.error}</div>;
    }
    if (this.state.lat && !this.state.erro) {
      return (
        <div>
          <DisplaySeason lat={this.state.lat} />
        </div>
      );
    }
    return <div>loading..</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
