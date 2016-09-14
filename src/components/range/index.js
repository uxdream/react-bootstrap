import './styles.scss';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import RcSlider from 'rc-slider';

import { propTypes } from '../../utils';

import Handle from './handle';

export default class Range extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: propTypes.className,
    disabled: PropTypes.bool,
    label: PropTypes.node,
    message: PropTypes.node,
    onChange: PropTypes.func.isRequired,
    valid: propTypes.valid,
    value: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);

    this._onChange = ::this._onChange;
  }

  _onChange(value) {
    const {
      onChange,
    } = this.props;

    onChange(value);
  }

  renderLabel(label) {
    if(!label) {
      return null;
    }

    return (
      <label className="form-control-label">{ label }</label>
    );
  }

  renderMessage(message) {
    if(!message) {
      return null;
    }

    return (
      <small>{ message }</small>
    );
  }

  renderRange(props, valid) {
    const {
      children,
      value,
      ...restProps,
    } = props;

    const classes = classnames(
      'range',
      {
        [`range--${ valid }`]: valid,
      }
    );

    return (
      <div className={ classes }>
        <RcSlider
          { ...restProps }
          handle={ <Handle>{ children }</Handle> }
          onChange={ this._onChange }
          tipFormatter={ null }
          value={ value }
        />
      </div>
    );
  }

  render() {
    const {
      className,
      label,
      message,
      valid,
      ...props,
    } = this.props;

    const classes = classnames(
      'form-group',
      'form-group--range',
      {
        'has-danger': valid === 'danger',
        'has-success': valid === 'success',
        'has-warning': valid === 'warning',
      },
      className
    );

    return (
      <fieldset className={ classes }>
        { this.renderLabel(label) }
        { this.renderRange(props, valid) }
        { this.renderMessage(message) }
      </fieldset>
    );
  }
}