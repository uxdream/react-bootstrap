import React, { Component, PropTypes } from 'react';

import { propTypes } from '../../utils';

export default class RangeHandle extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: propTypes.className,
    offset: PropTypes.number,
    value: PropTypes.number,
  }

  render() {
    const {
      children,
      className,
      offset,
      value,
    } = this.props;

    return (
      <div
        className={ className }
        style={ {
          left: `${ offset }%`,
        } }
      >{ children ? children : value }</div>
    );
  }
}