import './styles.scss';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

import { propTypes } from '../../utils';

export default class Icon extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: propTypes.className,
    icon: PropTypes.string.isRequired,
    size: PropTypes.number,
  }

  static defaultProps = {
    size: 20,
  }

  render() {
    const {
      className,
      icon,
      size,
      ...props,
    } = this.props;

    const classes = classnames(
      'icon',
      className
    );

    return (
      <span
        { ...props }
        className={ classes }
        style={ { fontSize: size } }
      >{ icon }</span>
    );
  }
}