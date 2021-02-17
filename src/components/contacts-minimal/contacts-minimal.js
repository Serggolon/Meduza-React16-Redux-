import React from 'react';
import {textFieldRender} from '../../utils';

import {ContainerContactsMinimal} from '../styled-elems';

const ContactsMinimal = ({contacts, workingHours}) => {
    return (<ContainerContactsMinimal>
            {textFieldRender('font-style', 'font-style', 'font-weight', 'font-weight', 'white', workingHours, 'Рабочее время')}
            {
                contacts.map((contact, index) => {
                    const {name, position, phoneNumber} = contact;
                    if (index > 2) return null;
                    return textFieldRender('font-style', 'font-style', 'font-weight', 'font-weight', 'white', phoneNumber, `${position} ${name}`);
                })
            }
        </ContainerContactsMinimal>
    );
};

export default ContactsMinimal;