import React from 'react';

function MySvgComponent({color = '#252367'}) {
  // Define the styles that were previously within the <defs> and <style> tags
  const cls1Style = { fill: '#1f1e1e', strokeWidth: '0px' };
  const cls2Style = { strokeWidth: '0px' }; // cls-2 style wasn't defined, assuming it follows the pattern
  const cls3Style = { fill: color, strokeWidth: '0px' };
  const cls4Style = { fill: '#dad9d9', strokeWidth: '0px' };

  return (
    <svg id="Layer_1" dataName="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 311 250.16">
      <path style={cls3Style} d="m311,250.16H0v-47.52c0-13.36,11.43-13.48,17.85-13.48h277.81c9.14,0,14.04,8.99,15,13.48l.34,47.52Z"/>
      <rect style={cls2Style} x="122.69" y="196.87" width="58" height="14" rx="5" ry="5"/>
      <g>
        <path style={cls1Style} d="m119.41,57V0h65v57h-65Z"/>
        <path style={cls4Style} d="m195.17,57.09h-87.68v66.73h24.44c-.24,21.38,0,66.06,0,73.85,0,6.48,3.59,8.42,7.19,8.42h21.56c11.5,0,10.78-5.18,10.78-8.42v-73.85h23.72c.24-22.24.57-66.73,0-66.73Z"/>
      </g>
    </svg>
  );
}

export default MySvgComponent;
