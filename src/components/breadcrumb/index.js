import './styles.scss';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { propTypes, reactKey } from '../../utils';

export default class Breadcrumb extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  static propTypes = {
    className: propTypes.className,
    crumbs: PropTypes.arrayOf(
      propTypes.crumbs
    ).isRequired,
  }

  renderLink(crumb) {
    const {
      label,
      url,
    } = crumb;

    return (
      <Link to={ url }>{ label }</Link>
    );
  }

  renderSpan(crumb) {
    const {
      label,
    } = crumb;

    return (
      <span>{ label }</span>
    );
  }

  renderCrumb(crumb) {
    const {
      router,
    } = this.context;

    const {
      className,
      label,
      url,
    } = crumb;

    const isActive = router.isActive(url);

    const classes = classnames(
      'breadcrumb-item',
      {
        active: isActive,
      },
      className,
    );

    return (
      <li
        className={ classes }
        key={ reactKey(label) }
      >{ !isActive ? this.renderLink(crumb) : this.renderSpan(crumb) }</li>
    );
  }

  render() {
    const {
      className,
      crumbs,
      ...props,
    } = this.props;

    const classes = classnames(
      'breadcrumb',
      className,
    );

    return (
      <ol
        { ...props }
        className={ classes }
      >
        {
          crumbs.map((crumb) => {
            return this.renderCrumb(crumb);
          })
        }
      </ol>
    );
  }
}