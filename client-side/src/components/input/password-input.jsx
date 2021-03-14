import React from 'react';
import { string, func } from 'prop-types';
import InputWithLabel from './input-with-label';

const PasswordInput = ({ name, value, onChange, label, ...props }) => (
    <InputWithLabel
      className="password-input"
      type="password"
      name={name}
      value={value}
      onChange={onChange}
      label={label}
      errors={[]}
      otherProps={{
          required: true,
          ...props
      }}
    />
);

PasswordInput.propTypes = {
    name: string.isRequired,
    value: string.isRequired,
    onChange: func.isRequired,
    label: string.isRequired,
};

export default PasswordInput;