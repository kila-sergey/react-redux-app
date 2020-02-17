import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss'

const Spinner = ({ size }) => {
  return (
    <div className={classnames("lds-css ng-scope", { 'sm': size === 'sm' })}>
      <div className="lds-eclipse">
        <div className="inner-loader">
        </div>
      </div>
    </div>
  )
}

Spinner.propTypes = {
  size: PropTypes.string,
}

export default Spinner;
