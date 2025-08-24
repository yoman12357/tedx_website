import React from 'react';
import '../mainstyles.css';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';


const Gallery = () => {
  return (
    <section className="gallery-section">
      <h2>GALLERY</h2>
      <div className="gallery">
        <img src={image1} alt="Gallery  1" className="gallery-item" />
        <img src={image2} alt="Gallery  2" className="gallery-item" />
        <img src={image3} alt="Gallery  3" className="gallery-item" />
        <img src={image4} alt="Gallery  4" className="gallery-item" />
      </div>
    </section>
  );
};

export default Gallery;
