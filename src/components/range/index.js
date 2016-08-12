import './styles.scss';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import ReactSlider from 'react-slider';

import { propTypes } from '../../utils';

export default class Range extends Component {
  static propTypes = {
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
      value,
    } = props;

    const classes = classnames(
      'range',
      {
        [`range--${ valid }`]: valid,
      }
    );

    return (
      <div className={ classes }>
        <ReactSlider
          { ...props }
          withBars
          barClassName="range__bar"
          className="range__trail"
          handleActiveClassName="range__handle--active"
          handleClassName="range__handle"
          onChange={ this._onChange }
        >
          <div>{ value }</div>
        </ReactSlider>
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