import React from 'react';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png'

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> services.
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Efficient</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos atque
              quasi laboriosam reiciendis voluptates earum, molestiae
              reprehenderit vel magni possimus doloremque consectetur esse
              vitae? Minus nemo repudiandae excepturi rerum eius?
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="" />
              <h3>Teamwork</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos atque
              quasi laboriosam reiciendis voluptates earum, molestiae
              reprehenderit vel magni possimus doloremque consectetur esse
              vitae? Minus nemo repudiandae excepturi rerum eius?
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="" />
              <h3>diaphragm</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos atque
              quasi laboriosam reiciendis voluptates earum, molestiae
              reprehenderit vel magni possimus doloremque consectetur esse
              vitae? Minus nemo repudiandae excepturi rerum eius?
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="" />
              <h3>Affordable</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos atque
              quasi laboriosam reiciendis voluptates earum, molestiae
              reprehenderit vel magni possimus doloremque consectetur esse
              vitae? Minus nemo repudiandae excepturi rerum eius?
            </p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="" />
      </div>
    </div>
  );
};

export default ServicesSection;
