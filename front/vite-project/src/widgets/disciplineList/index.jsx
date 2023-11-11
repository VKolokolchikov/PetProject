import React from 'react';

import './style.scss'

const DisciplineList = ({children}) => {
    return (
        <div className={"discipline_block"}>
            {...children}
        </div>
    );
};

export default DisciplineList;