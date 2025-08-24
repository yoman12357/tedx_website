import React from 'react';
import '../mainstyles.css';

const Experience = () => {
  return (
    <section className="experience">
      <h2>
        THE <span className="highlight">EXPERIENCE</span>
      </h2>
      <p className="experience-description">
        Powered by the vision of serving the student community with the most innovative and inspiring ideas, TEDxNITKSurathkal is a university TEDx event that began at NITK in 2013. Having held many successful editions in 2013, 2014, 2016, 2018, 2019, 2020, 2021 and 2022, TEDxNITKSurathkal is offering to its upcoming annual colleagues to explore beyond the conventions and allow people to nurture their passion at what is possible.
      </p>
      <div className="experience-features">
        <div className="feature-item">
          <span className="icon">💡</span>
          <h3>Impactful Ideas</h3>
          <p>We strive to bring forward powerful ideas that challenge the norms and carry the potential to transform lives.</p>
        </div>
        <div className="feature-item">
          <span className="icon">🤝</span>
          <h3>Community Strength</h3>
          <p>Standing 6000+ strong, our community comprises of curious individuals with an ever increasing appetite for learning.</p>
        </div>
        <div className="feature-item">
          <span className="icon">📢</span>
          <h3>Legacy</h3>
          <p>Ranking amongst the top educational institutes in India, our university adds a key ingredient in realising our vision.</p>
        </div>
        <div className="feature-item">
          <span className="icon">📍</span>
          <h3>Location</h3>
          <p>Hugging the Arabian sea along its length, our venue is a welcoming retreat for sparking up conversations about things that matter.</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
