import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const HTMLContent = ({content}) => {
    return (
        <div style={{textAlign: 'initial'}}>
            {ReactHtmlParser(content)}
        </div>
    );
};

export default HTMLContent;