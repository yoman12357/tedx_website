import React, { Suspense, lazy } from 'react';

const Banner = lazy(() => import('./components/banner'));
const EventDetails = lazy(() => import('./components/eventdetails'));
const CountdownTimer = lazy(() => import('./components/countdowntimer'));
const Experience = lazy(() => import('./components/experience'));
const Speakers = lazy(() => import('./components/speakers'));
const Tribute = lazy(() => import('./components/tribute'));
const SubscribeForm = lazy(() => import('./components/subscribeform'));
const Gallery = lazy(() => import('./components/gallery'));
const Footer = lazy(() => import('./components/footer'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Banner />
    <EventDetails />
    <CountdownTimer />
    <Experience />
    <Speakers />
    <Tribute />
    <SubscribeForm />
    <Gallery />
    <Footer />
  </Suspense>
);

export default App;
