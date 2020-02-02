import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const slogans = [
  {
    slogan: "Just Do It.",
    company: "Nike"
  },
  {
    slogan: "Think Different.",
    company: "Apple"
  },
  {
    slogan: "Because you're worth it.",
    company: "L'Oreal"
  },
  {
    slogan: "It's finger lickin' good.",
    company: "KFC"
  },
  {
    slogan: "Open Happiness.",
    company: "Coca-Cola"
  },
  {
    slogan: "America runs on Dunkin.",
    company: "Dunkin' Donuts"
  },
  {
    slogan: "I'm lovin' it.",
    company: "McDonald's"
  },
  {
    slogan: "Every Little Helps.",
    company: "Tesco"
  },
  {
    slogan: "Advancement Through Technology.",
    company: "Audi"
  }
];

const colors = [
  "#D99AAB",
  "#E4572E",
  "#17BEBB",
  "#FFC914",
  "#2E282A",
  "#76B041",
  "#BF9411",
  "#0D688C",
  "#1FA675"
];

class MyReactElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slogan: "Think Different.",
      company: "Apple",
      color: "#D99AAB"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const randomNumber = Math.floor(Math.random() * 9);
    this.setState({
      slogan: slogans[randomNumber].slogan,
      company: slogans[randomNumber].company,
      color: colors[randomNumber]
    });
  }
  render() {
    return (
      <div
        id="main"
        style={{
          backgroundColor: this.state.color,
          transition: "background-color 1s"
        }}
      >
        <div id="slogan-box">
          <div id="text-box">
            <i
              className="fa fa-quote-left"
              id="slogan-left"
              style={{
                color: this.state.color,
                transition: "background-color 1s"
              }}
            >
              {" "}
            </i>
            <p
              id="text"
              style={{
                color: this.state.color,
                transition: "background-color 1s"
              }}
            >
              {this.state.slogan}
            </p>
          </div>
          <p
            id="company"
            style={{
              color: this.state.color,
              transition: "background-color 1s"
            }}
          >
            -{this.state.company}
          </p>
          <div id="buttons">
            <div>
              <button
                id="button"
                onClick={this.handleClick}
                style={{
                  backgroundColor: this.state.color,
                  transition: "background-color 1s",
                  color: "white"
                }}
              >
                Next slogan
              </button>
            </div>
            <div>
              <a
                id="tweet-quote"
                target="_blank"
                rel="noopener noreferrer"
                href={`https://twitter.com/intent/tweet/?text=${
                  this.state.quote
                } - ${this.state.company}`}
              >
                <button
                  id="button"
                  style={{
                    backgroundColor: this.state.color,
                    transition: "background-color 1s"
                  }}
                >
                  <i
                    className="fab fa-twitter"
                    style={{
                      color: "#ffffff"
                    }}
                  />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MyReactElement />, document.getElementById("root"));
