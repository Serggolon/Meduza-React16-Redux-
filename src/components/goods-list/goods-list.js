import React from 'react';
import GoodsListItem from '../goods-list-item';

import {StyledGoodsList, StyledGoodsListItem} from '../styled-elems';

const GoodsList = ({goods, defaultGoodIcon, currencyLabel, onGoodClick}) => {

    return (
        <StyledGoodsList>
            {
                goods.map ((good) => {
                    let defaultIcon = "";
                    if(!good.photo.icon.data) defaultIcon = defaultGoodIcon;
                   return (
                       <StyledGoodsListItem key={good._id}>

                           <GoodsListItem
                               good={good}
                               defaultGoodIcon={defaultIcon}
                               currencyLabel={currencyLabel}
                               onGoodClick={() => onGoodClick(good._id)}/>

                       </StyledGoodsListItem>
                   )
                })
            }
        </StyledGoodsList>

    );
};

export default GoodsList;

