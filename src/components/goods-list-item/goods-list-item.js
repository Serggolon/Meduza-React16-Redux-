import React from 'react';
import {textFieldRender} from '../../utils';

import {
    ItemBlock,
    ItemDescribe,
    ItemImg,
    StyledHeaderTwo
} from '../styled-elems';

const GoodsListItem = ({good, currencyLabel, defaultGoodIcon, onGoodClick}) => {

    const {name, price: {value, wholesale, quantity}, photo: {icon: {data}}} = good;

    return (
        <ItemBlock onClick={onGoodClick}>

            <ItemImg type="button" src={data ? data : defaultGoodIcon} alt="icon"/>

            <ItemDescribe>
                <StyledHeaderTwo>{name}</StyledHeaderTwo>

                {textFieldRender('font-style', 'italic', 'font-weight', 'bold', 'gold', `${value} ${currencyLabel}`, 'Цена')}
                {textFieldRender('font-style', 'italic', 'font-weight', 'bold', 'red', `${wholesale} ${currencyLabel}`, `Цена(от ${quantity}шт.)`)}
            </ItemDescribe>

        </ItemBlock>
    )

};

export default GoodsListItem;