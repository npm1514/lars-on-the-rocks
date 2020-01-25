import React from 'react';
import { hydrate, render } from 'react-dom';
import Author from '../pages/AuthorPage';

if (window)
  render(
    <Author data={window.__DATA__} />,
    document.getElementById('app')
  );
