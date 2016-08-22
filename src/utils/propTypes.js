import { PropTypes } from 'react';

export default {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(
      PropTypes.bool
    ),
  ]),
  crumb: PropTypes.shape({
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
  selectOption: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
  }),
  tab: PropTypes.shape({
    disabled: PropTypes.bool,
    label: PropTypes.string.isRequired,
    url: PropTypes.string,
  }),
  valid: PropTypes.oneOf([
    'danger',
    'success',
    'warning',
  ]),
};