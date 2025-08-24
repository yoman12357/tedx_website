import React from 'react';
import '../mainstyles.css';

const SubscribeForm = () => {
  return (
    <section className="subscribe-form">
      <h3>Upcoming Events? Theme Reveal? Speaker List?</h3>
      <p>Sign up below to receive updates TEDx NITK news</p>
      <form>
        <input type="text" placeholder="First Name" name="firstName" required />
        <input type="text" placeholder="Last Name" name="lastName" required />
        <input type="email" placeholder="Email" name="email" required />
        <button type="submit">SUBSCRIBE</button>
      </form>
    </section>
  );
};

export default SubscribeForm;
