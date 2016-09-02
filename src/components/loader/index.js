import './styles.scss';

import classnames from 'classnames';
import React, { Component } from 'react';

import { propTypes } from '../../utils';

export default class Loader extends Component {
  static propTypes = {
    className: propTypes.className,
  };

  render() {
    const {
      className,
      ...props,
    } = this.props;

    const classes = classnames(
      'loader',
      className
    );

    return (
      <span
        { ...props }
        className={ classes }
      />
    );
  }
}