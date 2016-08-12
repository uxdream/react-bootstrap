import './styles.scss';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

import { propTypes, randomId } from '../../utils';

export default class Input extends Component {
  static propTypes = {
    className: propTypes.className,
    disabled: PropTypes.bool,
    label: PropTypes.node,
    message: PropTypes.node,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.oneOf([
      'password',
      'text',
    ]),
    valid: propTypes.valid,
    value: PropTypes.string.isRequired,
  }

  static defaultProps = {
    type: 'text',
  }

  constructor(props) {
    super(props);

    this._onChange = ::this._onChange;

    this.state = {
      id: randomId(),
    };
  }

  _onChange(event) {
    const value = event.target.value;

    const {
      onChange,
    } = this.props;

    onChange(value);
  }

  renderInput(props, disabled, valid) {
    const {
      id,
    } = this.state;

    const classes = classnames(
      'form-control',
      {
        [`form-control-${ valid }`]: valid,
      }
    );

    return (
      <input
        { ...props }
        className={ classes }
        id={ id }
        onChange={ this._onChange }
      />
    );
  }

  renderLabel(label) {
    if(!label) {
      return null;
    }

    const {
      id,
    } = this.state;

    return (
      <label
        className="form-control-label"
        htmlFor={ id }
      >{ label }</label>
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
      'form-group--input',
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
        { this.renderInput(props, valid) }
        { this.renderMessage(message) }
      </fieldset>
    );
  }
}