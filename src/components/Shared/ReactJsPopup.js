import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const ReactJsPopup = ({ trigger, content, position, arrowStyle }) => (
  <Popup trigger={trigger} position={position} arrowStyle={arrowStyle}>
    {content}
  </Popup>
);

export default ReactJsPopup