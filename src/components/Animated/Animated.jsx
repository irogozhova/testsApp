import React from 'react';
import PropTypes from 'prop-types';
import ReactAnimated from 'react-css-animated';

import animations from './Animated.scss';

const EASING_CUSTOM = 'cubic-bezier(0.25, 0, 0, 0.99)';

function getEasing(easing) {
  if (!easing) return easing;

  if (easing.in) {
    const myEasing = {};

    myEasing.in = easing.in === 'custom' ? EASING_CUSTOM : easing.in;
    myEasing.out = easing.out === 'custom' ? EASING_CUSTOM : easing.out;

    return myEasing;
  }

  return easing === 'custom' ? EASING_CUSTOM : easing;
}

const Animated = ({ easing, ...props }) => (
  <ReactAnimated
    {...props}
    animations={animations}
    easing={getEasing(easing)}
  />
);

Animated.propTypes = {
  easing: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      in: PropTypes.string,
      out: PropTypes.string,
    }),
  ]),
};

export default Animated;
