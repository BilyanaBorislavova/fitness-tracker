import React from 'react';
import { node, func, instanceOf, string } from 'prop-types';
import { HTTP_METHODS } from '../../constants/constants';

const { POST } = HTTP_METHODS;

const FormWithValidation = ({ children, onSubmit, className, otherProps }) => {
    // add validation
    return (
        <form
          method={POST}
          onSubmit={onSubmit}
          className={className}
          noValidate
          {...otherProps}
        >
            {children}
        </form>
    );
};

FormWithValidation.propTypes = {
    children: node.isRequired,
    onSubmit: func.isRequired,
    otherProps: instanceOf(Object),
    className: string,
};

FormWithValidation.defaultProps = {
    otherProps: {},
    className: '',
};

export default FormWithValidation;
