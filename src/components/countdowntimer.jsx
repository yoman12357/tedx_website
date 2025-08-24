import React, { useState, useEffect } from 'react';
import '../mainstyles.css';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2025-08-30T18:00:00') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <section className="countdown-timer">
      <p>Counter until the big event</p>
      <div className="timer-boxes">
        <div className="time-box">
          <span>{String(timeLeft.days).padStart(2, '0')}</span>
          <p>Days</p>
        </div>
        <div className="time-box">
          <span>{String(timeLeft.hours).padStart(2, '0')}</span>
          <p>Hours</p>
        </div>
        <div className="time-box">
          <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
          <p>Minutes</p>
        </div>
        <div className="time-box">
          <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
          <p>Seconds</p>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
