import React from "react";
import phoneImg from "../static/picture.png";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h3>Hello there! I'm</h3>
          <h1>Caue Meireles Duarte</h1>
          <p>
            Cloud Entusiast / Coding aficionado / Bachelor (Honours) in
            Information Technology
          </p>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
