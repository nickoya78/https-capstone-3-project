import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../Styles/Design.scss";
import "../images/Newyork.jpg";
import "../images/india.jpg";
import "../images/London.jpg";

function Design() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="h-25 d-inline-block w-100"
          src={require("../images/Newyork.jpg")}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>The Statue of Liberty</h1>
          <p>
            The Statue of Liberty was built in France between 1875 and 1884. It
            was disassembled and shipped to New York City in 1885. The statue
            was reassembled on Liberty Island in 1886. The Statue of Liberty was
            given to the United States by France, as a symbol of the two
            countries friendship.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="h-25 d-inline-block w-100"
          src={require("../images/London.jpg")}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>Tower Bridge London</h1>
          <p>
            Tower Bridge is famous because it's London's most striking bridge
            thanks to its Neo-Gothic architecture and lifting central sections.
            When it opened, it was the most sophisticated bascule bridge in the
            world. The bridge was constructed to give better access to the East
            End of London
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="h-25 d-inline-block w-100"
          src={require("../images/india.jpg")}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>The Taj Mahal</h1>
          <p>
            The Taj Mahal is a 17th Century riverfront mausoleum in Agra city
            which was built by Mughal emperor Shah Jahan in memory of his queen
            Mumtaz who died while giving birth. The Taj Mahal was designated as
            a UNESCO World Heritage Site in 1983 for being "the jewel of Muslim
            art in India
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Design;
