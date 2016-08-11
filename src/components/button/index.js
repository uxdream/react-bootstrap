import './styles.scss';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

import propTypes from '../../utils/propTypes';

export default class Button extends Component {
  static propTypes = {
    block: PropTypes.bool,
    children: PropTypes.node,
    className: propTypes.className,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf([
      'large',
      'small',
    ]),
    variant: PropTypes.oneOf([
      'danger',
      'danger-outline',
      'info',
      'info-outline',
      'link',
      'primary',
      'primary-outline',
      'secondary',
      'secondary-outline',
      'success',
      'success-outline',
      'warning',
      'warning-outline',
    ]),
  }

  static defaultProps = {
    block: false,
    disabled: false,
    variant: 'primary',
  }

  render() {
    const {
      block,
      children,
      className,
      size,
      variant,
      ...props,
    } = this.props;

    const classes = classnames(
      'btn',
      `btn-${ variant }`,
      {
        'btn-lg': size === 'large',
        'btn-sm': size === 'small',
        'btn-block': block,
      },
      className
    );

    return (
      <button
        className={ classes }
        { ...props }
      >{ children }</button>
    );
  }
}