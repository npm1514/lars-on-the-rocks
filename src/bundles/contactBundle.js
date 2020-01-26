import React from 'react';
import { hydrate, render } from 'react-dom';
import Contact from '../pages/ContactPage';

if (window)
  hydrate(
    <Contact data={window.__DATA__} />,
    document.getElementById('app')
  );
