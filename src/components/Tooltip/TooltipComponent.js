import React from 'react';
import '../../css/ToolTip.css';

export const ToolTip = props => {
  return (
    <div className='tooltip' style={props.toolTipLocStyle}>
      <button className='button-tooltip' onClick={() => props.onHighLight()}>
        Hightlight
      </button>
      <button
        className='button-tooltip extra-margin-left'
        onClick={() => props.onComment()}
      >
        Add Note
      </button>
    </div>
  );
};
