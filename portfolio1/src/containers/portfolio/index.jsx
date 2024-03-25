import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent";
import ImageOne from "../../images/flovia.png";
import ImageTwo from "../../images/plume.png";
import ImageThree from "../../images/iddeos.png";
import ImageFour from "../../images/slide.png";
import ImageFive from "../../images/portfolio.png";
import ImageSix from "../../images/loginFormTransparent.png";
import ImageSeven from "../../images/akiraSliders.png";
import ImageEight from "../../images/SliderCeser.png";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Projet Flovia",
    image: ImageOne,
    link: "https://www.youtube.com/watch?v=Xf0VVZC0dDk&t=16s",
  },
  {
    id: 2,
    name: "Projet Plume",
    image: ImageTwo,
    link: "https://www.youtube.com/watch?v=pe4AIBEjBXg&t=1s",
  },
  {
    id: 2,
    name: "Projet Inventor Manager",
    image: ImageThree,
    link: "https://www.youtube.com/watch?v=4-fz49MsHKk&t=4s",
  },
  {
    id: 3,
    name: "Slider eyes",
    image: ImageFour,
    link: "https://github.com/Cisco29/SliderEyes",
  },
  {
    id: 3,
    name: "Portfolio",
    image: ImageFive,
    link: "https://portfolio-cisco29s-projects.vercel.app/",
  },
  {
    id: 3,
    name: "Login Form transparent",
    image: ImageSix,
    link: "https://github.com/Cisco29/LoginFormTransparent",
  },
  {
    id: 3,
    name: "Hommage à Akira Toriyama",
    image: ImageSeven,
    link: "https://www.youtube.com/watch?v=dsvPbQsioRk",
  },
  {
    id: 2,
    name: "Hommage à Ceser87",
    image: ImageEight,
    link: "https://www.youtube.com/watch?v=OrA0yH2iUVI",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "PHP & React",
  },
  {
    filterId: 3,
    label: "Other",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);
  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }
  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img alt="portfolio" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>Visit</button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
