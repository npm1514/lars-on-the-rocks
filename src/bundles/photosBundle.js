import React from 'react';
import { hydrate, render } from 'react-dom';
import Photos from '../pages/PhotosPage';

if (window)
  render(
    <Photos data={window.__DATA__} />,
    document.getElementById('app')
  );
