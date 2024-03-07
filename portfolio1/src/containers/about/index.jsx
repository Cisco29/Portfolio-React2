import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: " Name",
    value: " Francisco Castro",
  },
  {
    label: "Age",
    value: " 44",
  },
  {
    label: "adress",
    value: " Paris",
  },
  {
    label: "Email",
    value: " castro.francisco@live.fr",
  },
  {
    label: "Phone",
    value: "+33 6 10 08 22 10",
  },
];

const jobSummary =
  "En reconversion professionnelle dans le développement web et mobile, après avoir suivi deux formations intensives, l'une d'une durée de 9 mois et l'autre de 3 mois. Passionné par le domaine, je suis désormais à la recherche d'un premier emploi qui me permettra d'acquérir et de développer mes compétences tout en contribuant aux projets innovants de votre entreprise.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personnalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(-900px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3>Front End Developper</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(500px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="personnalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <div className="about__content__servicesWrapper__innerContent">
            <div>
              <FaDev size={25} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiAndroid size={25} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <FaDatabase size={25} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiApple size={25} color="var(--yellow-theme-main-color)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
