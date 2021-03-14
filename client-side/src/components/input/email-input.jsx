import React from 'react';
import { string, func, instanceOf } from 'prop-types';
import { INPUT_TYPES } from '../../constants/constants';
import InputWithLabel from './input-with-label';

const { EMAIL } = INPUT_TYPES;

const EmailInput = ({ name, value, onChange, label, className, errors, otherProps }) => (
    <InputWithLabel
      type={EMAIL}
      name={name}
      value={value}
      onChange={onChange}
      label={label}
      className={className}
      errors={errors}
      otherProps={{
          pattern: '',
          required: true,
          ...otherProps
      }}
    />
);

EmailInput.propTypes = {
    name: string.isRequired,
    value: string.isRequired,
    label: string.isRequired,
    onChange: func.isRequired,
    className: string,
    errors: instanceOf(Array),
    otherProps: instanceOf(Object),
};

EmailInput.defaultProps = {
    className: '',
    errors: [],
    otherProps: {},
};

export default EmailInput;
