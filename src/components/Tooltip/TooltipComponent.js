import React from 'react';
import '../../css/ToolTip.css';

export const ToolTip = props => {
  return (
    <div className='tooltip' style={props.toolTipLocStyle}>
      <button className='button-tooltip' onClick={() => props.onHighLight()}>
        <i className='fa fa-pencil'></i>
      </button>
      <button
        className='button-tooltip extra-margin-left'
        onClick={() => props.onComment()}
      >
        <i className='fa fa-comment'></i>
      </button>
    </div>
  );
};

// WEBPACK FOOTER //
// ./src/app/components/ToolTip/ToolTipComponent.js
