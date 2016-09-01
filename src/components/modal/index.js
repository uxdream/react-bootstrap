import './styles.scss';

import React, { Component, PropTypes } from 'react';

import Button from '../button';
import Icon   from '../icon';

export default class Modal extends Component {
  static propTypes = {
    close: PropTypes.func.isRequired,
  }

  renderBody() {
    return (
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit, felis eu accumsan viverra, enim risus vestibulum purus, ac sagittis ex ligula ac erat. Donec eu justo dui. Curabitur felis nunc, ultrices a ex ac, volutpat porttitor purus. Ut lorem mauris, ornare a eleifend nec, dictum a risus.</p>
    );
  }

  renderFooter() {
    const {
      close,
    } = this.props;

    return (
      <div>
        <Button
          onClick={ close }
          variant="secondary"
        >Cancel</Button>
        <Button onClick={ close }>Save changes</Button>
      </div>
    );
  }

  renderHeader() {
    return (
      <h4 className="modal-title">Modal title</h4>
    );
  }

  render() {
    const {
      close,
    } = this.props;

    return (
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <Button
              onClick={ close }
              variant="link"
            >
              <Icon icon="&#xE5CD;" />
            </Button>
            { this.renderHeader() }
          </div>
          <div className="modal-body">
            { this.renderBody() }
          </div>
          <div className="modal-footer">
            { this.renderFooter() }
          </div>
        </div>
      </div>
    );
  }
}