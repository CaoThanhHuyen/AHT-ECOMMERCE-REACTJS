import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

const Test1 = () => {
    const param = useParams();
    console.log(param);
    

    return (
        <div>
            <h1>Day la Test 1</h1>
        </div>
    );
};

export default Test1;