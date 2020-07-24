import React from 'react';
import { If } from '../if';
import './list.scss';

export default props => (
  <React.Fragment>
    <ul className="list">{props.children}</ul>
    <If condition={props.children.length > 5}>
      <div>Wow, that's a lot of stuff!</div>
    </If>
  </React.Fragment>
);
