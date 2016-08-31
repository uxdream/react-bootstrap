import React, { Component } from 'react';

import {
  Breadcrumb,
  Button,
  Checkbox,
  Icon,
  Input,
  Page,
  Pagination,
  Range,
  Select,
  Tabs,
} from '../src';

export default class View extends Component {
  constructor(props) {
    super(props);

    this._onCheckboxChange   = ::this._onCheckboxChange;
    this._onInputChange      = ::this._onInputChange;
    this._onPaginationChange = ::this._onPaginationChange;
    this._onRangeChange      = ::this._onRangeChange;
    this._onSelectChange     = ::this._onSelectChange;

    this.state = {
      checkbox: false,
      input: '',
      pagination: 1,
      range: 50,
      selectOptions: [
        {
          label: 'Apple',
          value: 'apple',
        },
        {
          label: 'Banana',
          value: 'banana',
        },
        {
          label: 'Kiwi',
          value: 'kiwi',
        },
      ],
      selectValue: {
        label: 'Apple',
        value: 'apple',
      },
    };
  }

  _onCheckboxChange(value) {
    this.setState({
      checkbox: value,
    });
  }

  _onInputChange(value) {
    this.setState({
      input: value,
    });
  }

  _onPaginationChange(value) {
    this.setState({
      pagination: value,
    });
  }

  _onRangeChange(value) {
    this.setState({
      range: value,
    });
  }

  _onSelectChange(value) {
    this.setState({
      selectValue: value,
    });
  }

  render() {
    const {
      checkbox,
      input,
      pagination,
      range,
      selectOptions,
      selectValue,
    } = this.state;

    return (
      <section className="view">
        <Page>
          <section>
            <h1>Breadcrumb</h1>
            <div>
              <Breadcrumb
                crumbs={ [
                  {
                    label: 'Home',
                    url: '?crumb-home',
                  },
                  {
                    label: 'Settings',
                    url: '?crumb-settings',
                  },
                  {
                    label: 'Email address',
                    url: '?crumb-email-address',
                  },
                ] }
              />
            </div>
          </section>
          <section className="buttons">
            <h1>Button</h1>
            <div>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="success">Success</Button>
              <Button variant="info">Info</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="link">Link</Button>
            </div>
            <div>
              <Button variant="primary-outline">Primary</Button>
              <Button variant="secondary-outline">Secondary</Button>
              <Button variant="success-outline">Success</Button>
              <Button variant="info-outline">Info</Button>
              <Button variant="warning-outline">Warning</Button>
              <Button variant="danger-outline">Danger</Button>
            </div>
            <div>
              <Button
                disabled
                variant="primary"
              >Disabled</Button>
              <Button
                disabled
                variant="secondary"
              >Disabled</Button>
            </div>
            <div>
              <Button
                block
                variant="primary"
              >Block</Button>
              <Button
                block
                variant="secondary"
              >Block</Button>
            </div>
            <div>
              <Button size="small">Small</Button>
              <Button>Normal</Button>
              <Button size="large">Large</Button>
            </div>
          </section>
          <section className="checkboxes">
            <h1>Checkbox</h1>
            <div>
              <Checkbox
                onChange={ this._onCheckboxChange }
                value={ checkbox }
              />
              <Checkbox
                disabled
                onChange={ this._onCheckboxChange }
                value={ checkbox }
              />
            </div>
            <div>
              <Checkbox
                onChange={ this._onCheckboxChange }
                valid="success"
                value={ checkbox }
              />
              <Checkbox
                onChange={ this._onCheckboxChange }
                valid="warning"
                value={ checkbox }
              />
              <Checkbox
                onChange={ this._onCheckboxChange }
                valid="danger"
                value={ checkbox }
              />
            </div>
          </section>
          <section className="icons">
            <h1>Icon</h1>
            <div>
              <Icon icon="&#xE87D;" />
              <Icon icon="&#xE87D;" />
              <Icon icon="&#xE87D;" />
              <Icon icon="&#xE87D;" />
              <Icon icon="&#xE87D;" />
            </div>
            <div>
              <Button>
                Face <Icon icon="&#xE87D;" />
              </Button>
              <Button variant="secondary">
                Face <Icon icon="&#xE87D;" />
              </Button>
              <Button variant="link">
                Face <Icon icon="&#xE87D;" />
              </Button>
            </div>
          </section>
          <section>
            <h1>Input</h1>
            <div>
              <Input
                onChange={ this._onInputChange }
                value={ input }
              />
              <Input
                label="Label"
                message="Message"
                onChange={ this._onInputChange }
                placeholder="Placeholder"
                value={ input }
              />
            </div>
            <div>
              <Input
                disabled
                label="Label (disabled)"
                message="Message"
                onChange={ this._onInputChange }
                placeholder="Placeholder"
                value={ input }
              />
            </div>
            <div>
              <Input
                label="Label (success)"
                message="Message"
                onChange={ this._onInputChange }
                placeholder="Placeholder"
                valid="success"
                value={ input }
              />
              <Input
                label="Label (warning)"
                message="Message"
                onChange={ this._onInputChange }
                placeholder="Placeholder"
                valid="warning"
                value={ input }
              />
              <Input
                label="Label (danger)"
                message="Message"
                onChange={ this._onInputChange }
                placeholder="Placeholder"
                valid="danger"
                value={ input }
              />
            </div>
          </section>
          <section className="paginations">
            <h1>Pagination</h1>
            <div>
              <Pagination
                active={ pagination }
                onChange={ this._onPaginationChange }
                pages={ 20 }
              />
            </div>
          </section>
          <section>
            <h1>Range</h1>
            <div>
              <Range
                onChange={ this._onRangeChange }
                value={ range }
              />
              <Range
                label="Label"
                message="Message"
                onChange={ this._onRangeChange }
                value={ range }
              >{ `${ range }%` }</Range>
            </div>
            <div>
              <Range
                disabled
                label="Label (disabled)"
                message="Message"
                onChange={ this._onRangeChange }
                value={ range }
              />
            </div>
            <div>
              <Range
                label="Label (success)"
                message="Message"
                onChange={ this._onRangeChange }
                valid="success"
                value={ range }
              />
              <Range
                label="Label (warning)"
                message="Message"
                onChange={ this._onRangeChange }
                valid="warning"
                value={ range }
              />
              <Range
                label="Label (danger)"
                message="Message"
                onChange={ this._onRangeChange }
                valid="danger"
                value={ range }
              />
            </div>
          </section>
          <section>
            <h1>Select</h1>
            <div>
              <Select
                onChange={ this._onSelectChange }
                options={ selectOptions }
                value={ selectValue }
              />
              <Select
                label="Label"
                message="Message"
                onChange={ this._onSelectChange }
                options={ selectOptions }
                value={ selectValue }
              />
            </div>
            <div>
              <Select
                disabled
                label="Label (disabled)"
                message="Message"
                onChange={ this._onSelectChange }
                options={ selectOptions }
                value={ selectValue }
              />
            </div>
            <div>
              <Select
                label="Label (success)"
                message="Message"
                onChange={ this._onSelectChange }
                options={ selectOptions }
                valid="success"
                value={ selectValue }
              />
              <Select
                label="Label (warning)"
                message="Message"
                onChange={ this._onSelectChange }
                options={ selectOptions }
                valid="warning"
                value={ selectValue }
              />
              <Select
                label="Label (danger)"
                message="Message"
                onChange={ this._onSelectChange }
                options={ selectOptions }
                valid="danger"
                value={ selectValue }
              />
            </div>
          </section>
          <section>
            <h1>Tabs</h1>
            <div>
              <Tabs
                tabs={ [
                  {
                    label: 'Active',
                    url: '?tab-1',
                  },
                  {
                    label: 'Link',
                    url: '?tab-2',
                  },
                  {
                    label: 'Another link',
                    url: '?tab-3',
                  },
                  {
                    disabled: true,
                    label: 'Disabled',
                    url: '?tab-4',
                  },
                ] }
              />
            </div>
          </section>
        </Page>
      </section>
    );
  }
}