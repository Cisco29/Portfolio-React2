import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent";
const Skills = () => {
    return (
        <section id="skills" className="skill">
        <PageHeaderContent headerText="My Skills" icon={<BsInfoCircleFill size={40} />} />
      </section>
    );
};
export default Skills;