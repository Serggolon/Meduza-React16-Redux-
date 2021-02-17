import React from 'react';
import {ContactsContainer} from '../containers';
import {Footer, Paragraph} from '../styled-elems';


const ShopFooter = () => {
    return (
            <Footer>
                <ContactsContainer page={false}/>
                <Paragraph color={'white'}>All rights reserved 2019</Paragraph>
            </Footer>
    );
};

export default ShopFooter;