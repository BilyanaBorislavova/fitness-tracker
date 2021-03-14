import '../../styles/components/button/generic-btn.scss';

import React from 'react';
import { func, bool, string } from 'prop-types';
import { getClassName } from '../../utils/react-utils';

const GenericBtn = ({ onClick, isPrimary, className, text }) => {
    const combinedClassName = getClassName({
        btn: true,
        'btn-primary': isPrimary,
        'btn-secondary': !isPrimary,
        [className]: className.length,
    });

    return (
        <button
          className={combinedClassName}
          onClick={onClick}  
        >
            {text}
        </button>
    );
};

GenericBtn.propTypes = {
    onClick: func.isRequired,
    text: string.isRequired,
    isPrimary: bool,
    className: string,
};

GenericBtn.defaultProps = {
    isPrimary: true,
    className: '',
};

export default GenericBtn;
