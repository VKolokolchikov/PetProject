import React from 'react';

const MapFrame = () => {
    return (
        <div>
            <iframe style={{maxWidth: '100%'}}
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A2297d7f81497e242c8d0d4a2334eb9f7c17a115f2c0a3c890d4e5d3d647d88ef&amp;source=constructor"
                width="540px" height="412" frameBorder="0"></iframe>
        </div>
    );
};

export default MapFrame;