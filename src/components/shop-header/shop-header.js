import React from 'react';
import {Link} from 'react-router-dom';
import {ContactsContainer} from '../containers';
import {Header, StyledHeaderLinks, HeaderLink} from "../styled-elems";

const ShopHeader = () => {
    return (
        <Header>

            <StyledHeaderLinks>
                <Link to="/goods/populyarnye_tovary">
                    <HeaderLink>Товары</HeaderLink>
                </Link>

                <Link to="/presentations">
                    <HeaderLink>Презентации</HeaderLink>
                </Link>

                <Link to="/contacts">
                    <HeaderLink>Контакты</HeaderLink>
                </Link>
            </StyledHeaderLinks>

            <ContactsContainer page={false}/>

        </Header>
    )
};

export default ShopHeader;