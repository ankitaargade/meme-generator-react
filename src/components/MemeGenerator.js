import React, { Component } from "react";

export default class MemeGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
    this.onChange = this.onChange.bind(this);
    this.onMemeGen = this.onMemeGen.bind(this);
  }

  componentDidMount() {
    let api = "https://api.imgflip.com/get_memes";
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          allMemeImgs: data.data.memes,
        });
        console.log(data.data.memes);
      })
      .catch((err) => console.log(err));
  }
  onMemeGen(evt) {
    evt.preventDefault();
    console.log(
      "random no",
      Math.floor(
        Math.random() * (this.state.allMemeImgs.length - 1 - 1 + 1) + 1
      )
    );
    console.log(
      this.state.allMemeImgs[
        Math.floor(
          Math.random() * (this.state.allMemeImgs.length - 1 - 1 + 1) + 1
        )
      ].url
    );
    this.setState((prevState) => {
      return {
        ...prevState,
        randomImage:
          prevState.allMemeImgs[
            Math.floor(
              Math.random() * (this.state.allMemeImgs.length - 1 - 1 + 1) + 1
            )
          ].url,
      };
    });
  }
  onChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    console.log("changed");
  }
  render() {
    return (
      <div className="main">
        <form className="form" onSubmit={this.onMemeGen}>
          <input
            type="text"
            placeholder="Upper Text"
            value={this.state.topText}
            name="topText"
            onChange={this.onChange}
          ></input>

          <input
            type="text"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            name="bottomText"
            onChange={this.onChange}
          ></input>
          <button>Generate</button>
          {/* <h2>{JSON.stringify(this.state.allMemeImgs)}</h2> */}
        </form>

        <div className="meme">
          <img src={this.state.randomImage} name="randomImage" />

          <h2 className="top-text">{this.state.topText}</h2>
          <h2 className="bottom-text">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}
