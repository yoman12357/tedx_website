import React from 'react';
import '../mainstyles.css';

const EventDetails = () => {
  return (
    <section className="event-details">
      <div className="detail-item">
        <span className="icon">📅</span>
        <p>Date: 6:00 PM, 30th Aug, 2025</p>
      </div>
      <div className="detail-item">
        <span className="icon">📍</span>
        <p>Location: SJA, NITK Surathkal</p>
      </div>
      <div className="detail-item">
        <span className="icon">🎤</span>
        <p>Speakers: 8</p>
      </div>
    </section>
  );
};

export default EventDetails;
