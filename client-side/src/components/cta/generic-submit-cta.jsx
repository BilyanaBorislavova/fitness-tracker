import '../../styles/components/button/generic-cta.scss';

import React from 'react';
import { func, bool, string, instanceOf } from 'prop-types';
import { getClassName } from '../../utils/react-utils';

const GenericSubmitCta = ({ onClick, isPrimary, className, text, props }) => {
    const combinedClassName = getClassName({
        btn: true,
        'btn-primary': isPrimary,
        'btn-secondary': !isPrimary,
        [className]: className.length,
    });

    return (
        <button
          type="submit"
          className={combinedClassName}
          onClick={onClick}
          {...props}
        >
            {text}
        </button>
    );
};

GenericSubmitCta.propTypes = {
    text: string.isRequired,
    onClick: func,
    isPrimary: bool,
    className: string,
    props: instanceOf(Object),
};

GenericSubmitCta.defaultProps = {
    onClick: null,
    isPrimary: true,
    className: '',
    props: {},
};

export default GenericSubmitCta;
