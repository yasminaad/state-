import React, { Component } from 'react'
import "./App.css";
import image1 from './img.jpg'


class App extends React.Component {
  state = {
    fullName: "AD Yachmina",
    profession: "web devolper",
    bio: "Am 26 age, i live in sousse",
    show: true,
    image:"image1",

    count: 0,
  };

  handleClick = () => {
    this.setState({ show: !this.state.show });
  };
  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    },500);
  }
  render() {
    return (
      <div className="one">
      <div className="box">
        {this.state.show && (
          <div className="inf">
            <div className="Img">
              <img src={this.state.image} alt="" />
            </div>
            <section className="pos">
              <h1>{this.state.fullName}</h1>
              <h3>{this.state.profession}</h3>
              <p>{this.state.bio}</p>
              <div className="count">
                Count: {this.state.count}{" "}
                sec
              </div>
            </section>
          </div>
        )}
        <button type="button" className="btn" onClick={this.handleClick}>Show Me </button>
      </div>
    </div>
  );
}
}
export default App;

