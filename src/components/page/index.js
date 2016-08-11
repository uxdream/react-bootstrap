import './styles.scss';

import React, { Component, PropTypes } from 'react';

export default class Page extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    const {
      children,
    } = this.props;

    return (
      <div className="page">{ children }</div>
    );
  }
}