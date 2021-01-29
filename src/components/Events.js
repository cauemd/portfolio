import React, { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import event_data from "../static/event_data";

const Events = () => {
  const [people, setPeople] = useState(event_data);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 8000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section id="events" className="events-section">
      <div className="title">
        <h2>Tech Events</h2>
      </div>
      <div className="events-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote, link } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={`slider ${position}`} key={id}>
              <img src={image} alt={name} className="events-img" />
              <a href={link}>{name}</a>
              <p className="title">{title}</p>
              <p className="event-text">{quote}</p>
            </article>
          );
        })}
        <button className="prev-event" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next-event" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Events;
