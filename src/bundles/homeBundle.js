import React from 'react';
import { hydrate, render } from 'react-dom';
import Home from '../pages/HomePage';

if (window)
  render(
    <Home data={window.__DATA__} />,
    document.getElementById('app')
  );
