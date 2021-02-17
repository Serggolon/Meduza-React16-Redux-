import React from 'react';
import {StyledCategoryPanel, Paragraph, Button} from '../styled-elems';

const CategoryPanel = ({categories, activeButton, onButtonClick, categoriesNumber}) => {

        return (
            <StyledCategoryPanel categoriesNumber={categoriesNumber}>
                <Paragraph>Категории товаров: </Paragraph>
                {
                    categories.map((category) => {
                        const activeBtn = activeButton === category.name ? true : false;
                        return (
                            <Button active={activeBtn}
                                key={category.id}
                                onClick={() => onButtonClick(category.name)}>
                                {category.label}
                            </Button>
                        );
                    })
                }
            </StyledCategoryPanel>
        )
};

export default CategoryPanel;