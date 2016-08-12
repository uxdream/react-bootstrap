import './styles.scss';

import classnames from 'classnames';
import { concat, flatten, remove, uniq } from 'lodash';
import React, { Component, PropTypes } from 'react';

import { propTypes } from '../../utils';

export default class Pagination extends Component {
  static propTypes={
    active: PropTypes.number.isRequired,
    className: propTypes.className,
    onChange: PropTypes.func.isRequired,
    pages: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);

    this._next     = ::this._next;
    this._prev     = ::this._prev;
    this._onChange = ::this._onChange;
  }

  _next() {
    const {
      active,
      pages,
    } = this.props;

    if(active < pages) {
      this._onChange(active + 1);
    }
  }

  _pagination(pages, active) {
    const range = 2;

    const left   = [];
    const center = [];
    const right  = [];

    for(let i = 1; i <= range; ++i) {
      left.push(i);
    }

    for(let i = active - range; i <= active + range; ++i) {
      center.push(i);
    }

    for(let i = pages - (range - 1); i <= pages; ++i) {
      right.push(i);
    }

    let prepared = uniq(
      remove(
        concat(left, center, right),
        (page) => {
          return page > 0 && page <= pages;
        },
      )
    );

    prepared = prepared.map((page, index) => {
      if(page + 1 < prepared[index + 1]) {
        return [
          page,
          '...',
        ];
      }

      return page;
    });

    return flatten(prepared);
  }

  _prev() {
    const {
      active,
    } = this.props;

    if(active > 1) {
      this._onChange(active - 1);
    }
  }

  _onChange(index) {
    const {
      onChange,
    } = this.props;

    onChange(index);
  }

  renderNext(pages, active) {
    const classes = classnames(
      'page-item',
      {
        disabled: active === pages,
      }
    );

    return (
      <li className={ classes }>
        <span
          className="page-link"
          onClick={ this._next }
        >&raquo;</span>
      </li>
    );
  }

  renderPage(index, active) {
    const classes = classnames(
      'page-item',
      {
        active: index === active,
      }
    );

    return (
      <li
        className={ classes }
        key={ index }
      >
        <span
          className="page-link"
          onClick={ this._onChange.bind(null, index) }
        >{ index }</span>
      </li>
    );
  }

  renderPages(pages, active) {
    return this
      ._pagination(pages, active)
      .map((page, index) => {
        if(page === '...') {
          return this.renderSpacer(index);
        }

        return this.renderPage(page, active);
      });
  }

  renderPrev(active) {
    const classes = classnames(
      'page-item',
      {
        disabled: active === 1,
      }
    );

    return (
      <li className={ classes }>
        <span
          className="page-link"
          onClick={ this._prev }
        >&laquo;</span>
      </li>
    );
  }

  renderSpacer(index) {
    return (
      <li
        className="page-item disabled"
        key={ `spacer-${ index }` }
      >
        <span className="page-link">&hellip;</span>
      </li>
    );
  }

  render() {
    const {
      active,
      className,
      pages,
      ...props,
    } = this.props;

    const classes = classnames(
      'pagination',
      className
    );

    return (
      <ul
        { ...props }
        className={ classes }
      >
        { this.renderPrev(active) }
        { this.renderPages(pages, active) }
        { this.renderNext(pages, active) }
      </ul>
    );
  }
}