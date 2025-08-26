import React from 'react';
import '../mainstyles.css';

const EventDetails = () => {
  return (
    <section aria-labelledby="event-details-title" className="event-details">
      <h2 id="event-details-title">Event Details</h2>
      <ul>
        <li>
          <strong>Date & Time:</strong> 6:00 PM, 30th Aug, 2025
        </li>
        <li>
          <strong>Location:</strong> SJA, NITK Surathkal
        </li>
        <li>
          <strong>Speakers:</strong> 8
        </li>
      </ul>
    </section>
  );
};

export default EventDetails;
