import React, { forwardRef } from 'react';
import '../../css/Comment.css';

export const Comment = forwardRef((props, ref) => {
  return (
    <div id='commentNotes' style={props.commentBoxLocStyle} ref={ref}>
      <div id='header'>
        <i className='fa fa-comment'></i> PRIVATE COMMENT
        <button
          id='saveComment'
          onClick={() =>
            props.saveComment(
              document.getElementById('commentContent').innerText
            )
          }
        >
          Save Comment
        </button>
      </div>
      <div id='commentContent' contentEditable placeholder='Write Note Here'>
        {props.currentText}
      </div>
    </div>
  );
});
