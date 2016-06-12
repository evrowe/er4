import React from 'react';
import { createDevTools } from 'redux-devtools';

// Monitor Components
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

// createDevTools takes a monitor and produces a DevTools component
const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q' defaultIsVisible={false}>
    <LogMonitor theme='tomorrow' preserveScrollTop={false} />
  </DockMonitor>
);

export default DevTools;
