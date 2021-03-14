import '../../styles/components/button/generic-cta.scss';

import React from 'react';
import { func, bool, string, instanceOf } from 'prop-types';
import { getClassName } from '../../utils/react-utils';

const GenericCta = ({ onClick, isPrimary, className, text, props }) => {
    const combinedClassName = getClassName({
        btn: true,
        'btn-primary': isPrimary,
        'btn-secondary': !isPrimary,
        [className]: className.length,
    });

    return (
        <button
          type="button"
          className={combinedClassName}
          onClick={onClick}
          {...props}
        >
            {text}
        </button>
    );
};

GenericCta.propTypes = {
    onClick: func.isRequired,
    text: string.isRequired,
    isPrimary: bool,
    className: string,
    props: instanceOf(Object),
};

GenericCta.defaultProps = {
    isPrimary: true,
    className: '',
    props: {},
};

export default GenericCta;
