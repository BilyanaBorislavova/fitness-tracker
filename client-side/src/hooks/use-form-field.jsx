import { useState, useCallback } from 'react';

const useFormField = (initalValue = '') => {
  const [ value, setValue ] = useState(initalValue);

  const onChange = useCallback(e => {
    setValue(e.target.value);
  },[]);

  return [ value, onChange, setValue ];
};

export { useFormField };
