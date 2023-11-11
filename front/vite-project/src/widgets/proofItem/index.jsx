import React from 'react';

import './style.scss'

const ProofItem = ({item}) => {
    return (
        <div className={"proof-section"}>
                    <div className="proof-section__img">
                        <img className="proof-section__img" src={item.url} alt={item.title}/>
                    </div>
                    <div className="proof-section__info">
                        <h1 className={"proof-section__title"}>
                            {item.title}
                        </h1>
                        <h2 className={"proof-section__describe"}>
                            {item.description}
                        </h2>
                    </div>
                </div>
    );
};

export default ProofItem;