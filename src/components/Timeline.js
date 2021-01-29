import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import education from "../static/education_data";

const Timeline = () => {
  return (
    <article className="timeline-section" id="education">
      <h2 className="education-info">Education</h2>
      <VerticalTimeline>
        {education.map((course, index) => {
          const { title, subtitle, date, text, link, icon } = course;
          return (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={date}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={icon}
            >
              <h3 className="vertical-timeline-element-title">{title}</h3>
              <h4
                style={{ paddingTop: "8px" }}
                className="vertical-timeline-element-subtitle"
              >
                {subtitle}
              </h4>
              <p>{text}</p>
              <a href={link}>Click here for more info</a>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </article>
  );
};

export default Timeline;
