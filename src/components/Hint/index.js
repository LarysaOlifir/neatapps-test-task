import React from 'react';
import { HelpIcon } from '../Icons';

const Hint = (props) => (
   <div className="hint">
      <HelpIcon/>
      <div className="hint-body">{props.children}</div>
   </div>
)

export default Hint;
