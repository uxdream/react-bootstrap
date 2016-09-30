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
        dangerouslySetInnerHTML={ { // eslint-disable-line react/no-danger
          __html: icon,
        } }
        style={ size ? { fontSize: size } : undefined }
      />
    );
  }
}