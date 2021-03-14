import React from 'react';
import { string, func } from 'prop-types';
import TextInput from './text-input';

// const usernamePattern = getUsernamePattern();

const UsernameInput = ({ name, value, onChange, label }) => (
    <TextInput
      className="name-input"
      name={name}
      value={value}
      onChange={onChange}
      label={label}
      errors={[]}
      otherProps={{
          pattern: '',
          required: true,
      }}
    />
);

UsernameInput.propTypes = {
    name: string.isRequired,
    value: string.isRequired,
    onChange: func.isRequired,
    label: string.isRequired,
};

export default UsernameInput;
