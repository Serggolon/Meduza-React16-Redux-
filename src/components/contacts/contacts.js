import React from 'react';
import {textFieldRender} from '../../utils';

import {ContainerContacts, ContactsWorkingHours, ContactsPhoneNumbers, ContactsPostInfo} from '../styled-elems';

const Contacts = ({contacts, workingHours, postInfo}) => {
    return (<ContainerContacts>
            <ContactsWorkingHours>{textFieldRender('font-style', 'font-style', 'font-weight', 'font-weight', 'gold', workingHours, 'Рабочее время')}</ContactsWorkingHours>
            <ContactsPhoneNumbers>{
                contacts.map((contact) => {
                    const {name, position, phoneNumber} = contact;
                    return textFieldRender('font-style', 'font-style', 'font-weight', 'font-weight', 'gold', phoneNumber, `${position} ${name}`);
                })
            }

            </ContactsPhoneNumbers>
            <ContactsPostInfo>
                {textFieldRender('font-style', 'font-style', 'font-weight', 'font-weight', 'gold', postInfo, 'Информация о почтовых пересылках')}
            </ContactsPostInfo>
        </ContainerContacts>

    );
};
export default Contacts;