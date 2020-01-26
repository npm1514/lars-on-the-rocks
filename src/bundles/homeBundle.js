import React from 'react';
import { hydrate, render } from 'react-dom';
import Home from '../pages/HomePage';

if (window)
  hydrate(
    <Home data={window.__DATA__} />,
    document.getElementById('app')
  );
