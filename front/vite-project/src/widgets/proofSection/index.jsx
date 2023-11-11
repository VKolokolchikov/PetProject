import React from 'react';

import ProofItem from "../proofItem/index.jsx";

const ProofSection = ({item}) => {
    return (
        <div>
            {item.map(itemObj =>
                <ProofItem key={itemObj.title} item={itemObj}/>
            )}
        </div>

    );
};

export default ProofSection;