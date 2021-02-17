import React from 'react';

import {StyledCategoryPanel, Paragraph, StyledSearchInput} from '../styled-elems';

const GoodsSearchPanel = ({category, onSearchChange}) => {


    return (
        <StyledCategoryPanel>
            <Paragraph color={'white'}>Поиск в категории "{category}": </Paragraph>
            <StyledSearchInput type="text"
                               size="30"
                               placeholder={'Введите значение для поиска'}
                               onChange={(event) => onSearchChange(event.target.value.toLowerCase())}/>
        </StyledCategoryPanel>
    )

};

export default GoodsSearchPanel;