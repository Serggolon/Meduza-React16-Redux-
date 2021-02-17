import React from 'react';
import {ContactsContainer} from '../containers';
import {ContainerMain} from '../styled-elems';

const ContactsPage = () => {
    return (
        <ContainerMain>
            <ContactsContainer page={true}/>
        </ContainerMain>
    )
};

export default ContactsPage;