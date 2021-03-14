import React from 'react';
import { string, func } from 'prop-types';
// import { getNamePattern } from '../../utils/validation-utils';
import TextInput from './text-input';

// const namePattern = getNamePattern();

const NameInput = ({ name, value, onChange, label }) => (
    <TextInput
      className="name-input"
      name={name}
      value={value}
      onChange={onChange}
      label={label}
      errors={[]}
      otherProps={{
          pattern: '',
          required: true
      }}
    />
);

NameInput.propTypes = {
    name: string.isRequired,
    value: string.isRequired,
    onChange: func.isRequired,
    label: string.isRequired,
};

export default NameInput;
