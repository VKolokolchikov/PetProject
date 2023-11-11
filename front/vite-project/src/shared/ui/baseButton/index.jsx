import React from 'react';

import './style.scss'

const BaseButton = ({classesBtn, text, styleBtn, ...props}) => {
    return (
        <div>
            <button
                className={classesBtn ? classesBtn.join(' ') : 'base-btn'}
                style={{...styleBtn}}
                {...props}>
                    {text}
            </button>
        </div>
    );
};

export default BaseButton;
