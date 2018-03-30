import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TextField } from '@cmsgov/design-system-core';

import ToJS from '../ToJS';
import Actions from '../../actions';

export const Test = function({
  textfield,
  updateTextfieldValue
}) {
  return <div className='ds-u-padding--3 test-component'>
    <h1>Test Page</h1>

    <p>{textfield}</p>

    <TextField
      value={textfield}
      label='Example Input'
      labelClassName='ds-u-margin-top--0'
      name='example_input'
      requirementLabel='Optional'
      onChange={(e) => updateTextfieldValue(e.target.value)}
    />
  </div>;
};

Test.propTypes = {
  textfield: PropTypes.string.isRequired,
  updateTextfieldValue: PropTypes.func.isRequired
};

export default connect(
  state => ({
    textfield: state.get('textfield')
  }),
  dispatch => ({
    updateTextfieldValue: (value) => dispatch({
      type: Actions.UPDATE_TEXT_FIELD,
      value
    })
  })
)(ToJS(Test));
