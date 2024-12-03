import React, { Component } from "react";
import "./styles.css";

export class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      element1Style: "new-color",
      element2Style: null,
    };
  }

  handleElement1Style = () => {
    this.setState((prevState) => ({
      element1Style:
        prevState.element1Style === "new-color" ? "change-color" : "new-color",
    }));
  };

  handleElement2Style = () => {
    this.setState((prevState) => ({
      element2Style:
        prevState.element2Style === "new-color" ? "change-color" : "new-color",
    }));
  };

  render() {
    const { element1Style, element2Style } = this.state;

    return (
      <>
        <p>Мої хобі:</p>
        <ul>
          <li>Перегляд фільмів</li>
          <li>Подорожі</li>
          <li
            id="my-variant-element"
            className={element1Style}
            onClick={this.handleElement1Style}
          >
            Компьютерні ігри
          </li>
          <li
            id="my-variant-element-2"
            className={element2Style}
            onClick={this.handleElement2Style}
          >
            Настільні ігри
          </li>
        </ul>

        <h3>Три мої улюблені фільми:</h3>
        <ol>
          <li>"Побіг з шоушенку"</li>
          <li>"Ford v Ferrari"</li>
          <li>"Острів проклятих"</li>
        </ol>

        <h3>Опис улюбленого міста:</h3>
        <p>
          Одним з найулюбленіших міст, де я бував, є Львів. Це місто відоме
          своєю унікальною архітектурою, смачною кавою та атмосферою
          середньовіччя.
        </p>
      </>
    );
  }
}
