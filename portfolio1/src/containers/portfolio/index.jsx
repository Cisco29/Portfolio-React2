import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent";
import ImageOne from "../../images/flovia.png";
import ImageTwo from "../../images/plume.png";
import ImageThree from "../../images/iddeos.png";
import ImageFour from "../../images/slide.png";
import ImageFive from "../../images/portfolio.png";
import ImageSix from "../../images/loginFormTransparent.png";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Projet Flovia",
    image: ImageOne,
    link: "../../../public/assets/video/floviaVideo.mp4",
  },
  {
    id: 2,
    name: "Projet Plume",
    image: ImageTwo,
    link: "../../../public/assets/video/plumeVideo.mp4",
  },
  {
    id: 2,
    name: "Projet Inventor Manager",
    image: ImageThree,
    link: "../../../public/assets/video/iddeosVideo.mp4",
  },
  {
    id: 3,
    name: "Slider eyes",
    image: ImageFour,
    link: "",
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
    link: "",
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
function handleHover(index){
  setHoveredValue(index)
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
              onMouseEnter={()=>handleHover(index)}
              onMouseLeave={()=>handleHover(null)}
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
      <a href={item.link} target="_blank" rel="noopener noreferrer">
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
