import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent";
import ImageOne from "../../images/flovia.png";
import ImageTwo from "../../images/plume.png";
import ImageThree from "../../images/iddeos.png";
import ImageFour from "../../images/slide.png";
import ImageFive from "../../images/portfolio.png";
import "./styles.scss";
import  { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name : "Projet Flovia",
    image : ImageOne,

  },
  {
    id: 2,
    name : "Projet Plume",
    image : ImageTwo,
  },
  {
    id: 2,
    name : "Projet Inventor Manager",
    image : ImageThree,
  },
  {
    id: 3,
    name : "Slide eyes",
    image : ImageFour,
  },
  {
    id: 3,
    name : "Portfolio",
    image : ImageFive,
  }
]

const filterData = [
  {
    filterId: 1,
    label : 'All'
  },
  {
    filterId: 2,
    label : 'PHP & React'
  },
  {
    filterId: 3,
    label : 'Other'
  },
]

const Portfolio = () => {

  const [filteredvalue, setFilteredValue] = useState(1)
  function handleFilter(currentId){
    setFilteredValue(currentId)
  }
  const filteredItems = filteredvalue === 1 ? portfolioData : portfolioData.filter(item => item.id === filteredvalue)

    return (
     
        <section id="portfolio" className="portfolio">
        <PageHeaderContent headerText="My Portfolio" icon={<BsInfoCircleFill size={40} />}
         />
         <div className="portfolio__content">
          <ul className="portfolio__content__filter">
            {
              filterData.map(item => (
                <li className={item.filterId === filteredvalue ? "active" : ""} onClick={()=>handleFilter(item.filterId)} key={item.filterId}>
                  { 
                    item.label 
                  }
                </li>
              ))
            }

          </ul>
          <div className="portfolio__content__cards">
            {
              filteredItems.map((item) => (
                <div className="portfolio__content__cards__item" key={`cardItem${item.name.trim()}`}>
                  <div className="portfolio__content__cards__item__img-wrapper">
                    <a>
                      <img  alt="portfolio" src={item.image}  />
                    </a>
                  </div>

                </div>
              ))
            }

          </div>

         </div>
      </section>
    );
};
export default Portfolio;