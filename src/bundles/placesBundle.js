import React from 'react';
import { hydrate, render } from 'react-dom';
import Places from '../pages/PlacesPage';

if (window)
  hydrate(
    <Places data={window.__DATA__} />,
    document.getElementById('app')
  );
