import './styles.scss';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

import { propTypes } from '../../utils';

import Loader from '../loader';

export default class LoadingArea extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: propTypes.className,
    loading: PropTypes.bool,
  };

  render() {
    const {
      className,
      children,
      loading,
      ...props,
    } = this.props;

    const classes = classnames(
      'loading-area',
      className
    );

    return (
      <div
        { ...props }
        className={ classes }
      >{ loading ? <Loader /> : children }</div>
    );
  }
}