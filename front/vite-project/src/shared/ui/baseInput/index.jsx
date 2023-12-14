import React from 'react';

import './style.scss'

const BaseInput = ({classesInput, text, styleInput, ...props}) => {

    return (
        <div>
            <input
                className={classesInput ? classesInput.join(' ') : 'base-input'}
                style={{...styleInput}}
                {...props}
                />
        </div>
    );
};

export default BaseInput;