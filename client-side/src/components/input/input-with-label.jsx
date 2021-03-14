import '../../styles/components/input/input-with-label.scss';

import React from 'react';
import { string, func, instanceOf } from 'prop-types';
import { getClassName } from '../../utils/react-utils';

const InputWithLabel = ({ type, name, value, onChange, label, className, errors, otherProps }) => {
    const combinedClassName = getClassName({
        'input-with-label': true,
        [className]: className.length,
    });

    const hasErrors = errors && errors.length;
    
    return (
        <label className={combinedClassName}>
            <input
              className="input-with-label-field"
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={label}
              {...otherProps}
            />
            <article className="input-with-label-floating-label">
                {label}
            </article>
                {/* {
                    hasErrors && (
                    <ul className="input-with-label-content-error-messages">
                        {errors.map(error => <li key={error}>{error}</li>)}
                    </ul>)
                } */}
        </label>
    )
};

InputWithLabel.propTypes = {
    type: string.isRequired,
    name: string.isRequired,
    value: string.isRequired,
    label: string.isRequired,
    onChange: func.isRequired,
    className: string,
    errors: instanceOf(Array),
    otherProps: instanceOf(Object),
};

InputWithLabel.defaultProps = {
    className: '',
    errors: [],
    otherProps: {},
};

export default InputWithLabel;
