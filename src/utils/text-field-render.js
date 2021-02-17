import React from 'react';
import {Paragraph} from '../components/styled-elems';

const textFieldRender = (fStyle, fSpanStyle, fWeight, fSpanWeight, fColor, field, fieldLabel) => {

    if (!field) return null;

    if (field !== '' && fieldLabel === undefined) {
        return (<Paragraph key={field} fStyle={fStyle} fSpanStyle={fSpanStyle} fWeight={fWeight} fSpanWeight={fSpanWeight} fColor={fColor}>{field}</Paragraph>)
    }

    if (field && fieldLabel) {
        return (<Paragraph key={field} fStyle={fStyle} fSpanStyle={fSpanStyle} fWeight={fWeight} fSpanWeight={fSpanWeight} fColor={fColor}> {fieldLabel}: <span>{field} </span></Paragraph>)
    }

    return null;
};

export default textFieldRender;