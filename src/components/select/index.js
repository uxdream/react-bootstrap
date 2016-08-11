import './styles.scss';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import ReactSelect from 'react-select';

import propTypes from '../../utils/propTypes';

export default class Select extends Component {
  static propTypes = {
    className: propTypes.className,
    disabled: PropTypes.bool,
    label: PropTypes.node,
    message: PropTypes.node,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
      propTypes.selectOption
    ).isRequired,
    valid: propTypes.valid,
    value: propTypes.selectOption.isRequired,
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

  renderSelect(props, valid) {
    const {
      value,
    } = props;

    const classes = classnames(
      {
        [`Select--${ valid }`]: !!valid,
      }
    );

    return (
      <ReactSelect
        { ...props }
        className={ classes }
        clearable={ false }
        onChange={ this._onChange }
        searchable={ false }
        value={ value.value }
      />
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
      'form-group--select',
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
        { this.renderSelect(props, valid) }
        { this.renderMessage(message) }
      </fieldset>
    );
  }
}