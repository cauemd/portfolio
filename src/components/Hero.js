import React from "react";
import myImg from "../static/picture.png";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h3>Hello there! I'm</h3>
          <h1>Caue Meireles Duarte</h1>
          <p>
            Cloud Entusiast / Coding Aficionado / Bachelor (Honours) in
            Information Technology Student
          </p>
        </article>
        <article className="hero-images">
          <img src={myImg} alt="developer" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
