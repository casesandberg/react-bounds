'use strict';

import React from 'react';
import Outside from '../examples/schedule/Schedule.jsx';

React.render(
  React.createElement('div', { style: { padding: '20px', height: window.innerHeight - 40 } }, React.createElement(Outside)),
  document.getElementById('root')
);
