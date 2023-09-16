// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance} from 'react-360-web';

function init(bundle, emptyState, options = {}) {
  const params = new URLSearchParams(location.search);
  const url = params.get('url');
  const el = document.querySelector('#container');
  const r360 = new ReactInstance(bundle, params.has('url') ? el : emptyState, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('video_player', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  // Load the initial environment
  if (params.has('url')) {
    r360.compositor.setBackground(url);
  }
}

window.React360 = {init};
