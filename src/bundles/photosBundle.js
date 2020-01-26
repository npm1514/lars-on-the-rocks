import React from 'react';
import { hydrate, render } from 'react-dom';
import Photos from '../pages/PhotosPage';

if (window)
  hydrate(
    <Photos data={window.__DATA__} />,
    document.getElementById('app')
  );
