import './styles.scss';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { propTypes, reactKey } from '../../utils';

export default class Tabs extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  static propTypes = {
    className: propTypes.className,
    tabs: PropTypes.arrayOf(
      propTypes.tab
    ).isRequired,
  }

  renderLink(tab) {
    const {
      router,
    } = this.context;

    const {
      disabled,
      label,
      url,
    } = tab;

    const classes = classnames(
      'nav-link',
      {
        active: router.isActive(url),
        disabled,
      }
    );

    return (
      <Link
        className={ classes }
        to={ url }
      >{ label }</Link>
    );
  }

  renderSpan(tab) {
    const {
      disabled,
      label,
    } = tab;

    const classes = classnames(
      'nav-link',
      {
        disabled,
      }
    );

    return (
      <span className={ classes }>{ label }</span>
    );
  }

  renderTab(tab) {
    const {
      className,
      disabled,
      label,
      url,
    } = tab;

    const classes = classnames(
      'nav-item',
      className,
    );

    const isLink = !disabled && url;

    return (
      <li
        className={ classes }
        key={ reactKey(label) }
      >{ isLink ? this.renderLink(tab) : this.renderSpan(tab) }</li>
    );
  }

  render() {
    const {
      className,
      tabs,
      ...props,
    } = this.props;

    const classes = classnames(
      'nav',
      'nav-tabs',
      className,
    );

    return (
      <ul
        { ...props }
        className={ classes }
      >
        {
          tabs.map((tab) => {
            return this.renderTab(tab);
          })
        }
      </ul>
    );
  }
}