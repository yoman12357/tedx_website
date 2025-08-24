import React from 'react';
import '../mainstyles.css';
import speaker1 from '../images/speaker1.png';
import speaker2 from '../images/speaker2.png';
import speaker3 from '../images/speaker3.png';
import speaker4 from '../images/speaker4.png';
import speaker5_6 from '../images/speaker5and6.png';
import speaker7 from '../images/speaker7.png';

const Speakers = () => {
  return (
    <section className="speakers">
      <h2>OUR <span className="highlight">SPEAKERS</span></h2>
      <div className="speakers-list">
        <div className="speaker-card">
          <img src={speaker1} alt="Speaker 1" className="speaker-image" />
          <p className="speaker-name">Anil Chhikara</p>
        </div>
        <div className="speaker-card">
          <img src={speaker2} alt="Speaker 2" className="speaker-image" />
          <p className="speaker-name">Thaj</p>
        </div>
        <div className="speaker-card">
          <img src={speaker3} alt="Speaker 3" className="speaker-image" />
          <p className="speaker-name">Asha Bhat</p>
        </div>
         <div className="speaker-card">
          <img src={speaker4} alt="Speaker 4" className="speaker-image" />
          <p className="speaker-name">LT Gen Neeraj Varshney</p>
        </div>
         <div className="speaker-card">
          <img src={speaker5_6} alt="Speaker 5&6" className="speaker-image" />
          <p className="speaker-name">Raghav and Radhika</p>
        </div>
         <div className="speaker-card">
          <img src={speaker7} alt="Speaker 7" className="speaker-image" />
          <p className="speaker-name">Lakshmi R Iyer</p>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
