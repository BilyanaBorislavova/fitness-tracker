import React from 'react';
import { string, func, instanceOf } from 'prop-types';
import { INPUT_TYPES } from '../../constants/constants';
import InputWithLabel from './input-with-label';

const { TEXT } = INPUT_TYPES;

const TextInput = ({ name, value, onChange, label, className, errors, otherProps }) => (
    <InputWithLabel
      type={TEXT}
      name={name}
      value={value}
      onChange={onChange}
      label={label}
      className={className}
      errors={errors}
      otherProps={otherProps}
    />
);

TextInput.propTypes = {
    name: string.isRequired,
    value: string.isRequired,
    onChange: func.isRequired,
    label: string.isRequired,
    className: string,
    errors: instanceOf(Array),
    otherProps: instanceOf(Object),
};

TextInput.defaultProps = {
    className: '',
    errors: [],
    otherProps: {},
};

export default TextInput;
