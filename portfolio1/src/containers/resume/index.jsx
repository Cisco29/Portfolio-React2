import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent";

const Resume = () => {
    return (
        <section id="resume" className="resume">
        <PageHeaderContent headerText="My Resumeesume" icon={<BsInfoCircleFill size={40} />} />
      </section>
    );
};
export default Resume;