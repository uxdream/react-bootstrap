import './styles.scss';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

import propTypes from '../../utils/propTypes';

export default class Tooltip extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: propTypes.className,
    position: PropTypes.oneOf([
      'bottom',
      'left',
      'right',
      'top',
    ]),
    tooltip: PropTypes.node.isRequired,
  }

  static defaultProps = {
    position: 'top',
  }

  renderTooltip(props) {
    const {
      position,
      tooltip,
    } = props;

    const classes = classnames(
      'tooltip',
      `tooltip-${ position }`
    );

    return (
      <span className={ classes }>
        <span className="tooltip-arrow" />
        <span className="tooltip-inner">{ tooltip }</span>
      </span>
    );
  }

  render() {
    const {
      children,
      className,
      ...props,
    } = this.props;

    const classes = classnames(
      'tooltip-outer',
      className
    );

    return (
      <span className={ classes }>
        { children }
        { this.renderTooltip(props) }
      </span>
    );
  }
}