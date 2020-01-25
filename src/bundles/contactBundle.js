import React from 'react';
import { hydrate, render } from 'react-dom';
import Contact from '../pages/ContactPage';

if (window)
  render(
    <Contact data={window.__DATA__} />,
    document.getElementById('app')
  );
