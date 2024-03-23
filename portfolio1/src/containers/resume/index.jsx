import React from "react";
import PageHeaderContent from "../../components/PageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { data } from "./utils"; // Import des données d'expérience et d'éducation
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import "./styles.scss";
import { MdWork } from "react-icons/md";

const Resume = () => {
    return (
        <section id="resume" className="resume">
            {/* En-tête de la page */}
            <PageHeaderContent headerText="My Resume" icon={<BsInfoCircleFill size={40} />} />

            {/* Timeline pour l'expérience professionnelle */}
            <div className="timeline">
                <div className="timeline__experience">
                    <h3 className="timeline__experience__header-text">Experience</h3>
                    <VerticalTimeline
                        layout="1-column"
                        lineColor="var(--yellow-theme-main-color)"
                    >
                        {data.experience.map((item, i) => (
                            <VerticalTimelineElement
                                key={i}
                                className="timeline__experience__vertical-timeline-element"
                                contentStyle={{
                                    background: "none",
                                    color: "var(--yellow-theme-sub-text-color)",
                                    border: "1.5px solid var(--yellow-theme-main-color)",
                                }}
                                date={`${item.startDate} - ${item.endDate}`} // Utilisez les dates spécifiques
                                icon={<MdWork />}
                                iconStyle={{
                                    background: '#181818',
                                    color: "var(--yellow-theme-main-color)",
                                }}
                            >
                                <div className="vertical-timeline-element-title-wrapper">
                                    <h3>{item.title}</h3>
                                    <h4>{item.subTitle}</h4>
                                </div>
                                <p className="vertical-timeline-element-title-wrapper-description">{item.description}</p>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>

                {/* Timeline pour l'éducation */}
                <div className="timeline__education">
                    <h3 className="timeline__education__header-text">Education</h3>
                    <VerticalTimeline
                        layout="1-column"
                        lineColor="var(--yellow-theme-main-color)"
                    >
                        {data.education.map((item, i) => (
                            <VerticalTimelineElement
                                key={i}
                                className="timeline__experience__vertical-timeline-element"
                                contentStyle={{
                                    background: "none",
                                    color: "var(--yellow-theme-sub-text-color)",
                                    border: "1.5px solid var(--yellow-theme-main-color)",
                                }}
                                date={`${item.startDate} - ${item.endDate}`} // Utilisez les dates spécifiques
                                icon={<MdWork />}
                                iconStyle={{
                                    background: '#181818',
                                    color: "var(--yellow-theme-main-color)",
                                }}
                            >
                                <div className="vertical-timeline-element-title-wrapper">
                                    <h3>{item.title}</h3>
                                    <h4>{item.subTitle}</h4>
                                </div>
                                <p className="vertical-timeline-element-title-wrapper-description">{item.description}</p>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    );
};

export default Resume;
