import React from 'react';

import './style.scss'

const BaseInput = ({classesBtn, text, styleInput, ...props}) => {

    return (
        <div>
            <input
                className={classesBtn ? classesBtn.join(' ') : 'base-input'}
                style={{...styleInput}}
                {...props}
                />
        </div>
    );
};

export default BaseInput;