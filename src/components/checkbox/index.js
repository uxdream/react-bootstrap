import './styles.scss';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

import Icon from '../icon';

import { propTypes } from '../../utils';

export default class Checkbox extends Component {
  static propTypes = {
    className: propTypes.className,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    valid: propTypes.valid,
    value: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);

    this._onChange = ::this._onChange;
  }

  _onChange() {
    const {
      disabled,
      onChange,
      value,
    } = this.props;

    if(!disabled) {
      onChange(!value);
    }
  }

  renderCheckbox(props, valid) {
    const {
      disabled,
      onChange, // eslint-disable-line no-unused-vars
      value,
      ...rest,
    } = props;

    const classes = classnames(
      'form-control',
      {
        [`form-control-${ valid }`]: valid,
        'form-control-checked': value,
        'form-control-disabled': disabled,
      }
    );

    return (
      <div
        { ...rest }
        className={ classes }
        onClick={ this._onChange }
      >
        <Icon icon="check" />
      </div>
    );
  }

  render() {
    const {
      className,
      valid,
      ...props,
    } = this.props;

    const classes = classnames(
      'form-group',
      'form-group--checkbox',
      {
        'has-danger': valid === 'danger',
        'has-success': valid === 'success',
        'has-warning': valid === 'warning',
      },
      className
    );

    return (
      <fieldset className={ classes }>
        { this.renderCheckbox(props, valid) }
      </fieldset>
    );
  }
}