import React from 'react';
import {GoodsListItemDetailsContainer} from '../containers';
import {ContainerMain} from '../styled-elems';

const GoodDetailsPage = ({goodId}) => {
    return (
        <ContainerMain>
            <GoodsListItemDetailsContainer goodId={goodId}/>
        </ContainerMain>
    );
};

export default GoodDetailsPage;

