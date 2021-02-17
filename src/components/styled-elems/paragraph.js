import styled from 'styled-components';

const Paragraph = styled.p`
    margin: 0;
    color: ${props => props.fColor ? props.fColor : 'white' };
    text-shadow: 2px 1px 2px black, 0 0 1em cyan;
    word-wrap: normal;
    font-weight: ${props => props.fWeight !== 'font-weight' ? props.fWeight : 'normal' };
    font-style: ${props => props.fStyle !== 'font-style' ? props.fStyle : 'normal' };
    & > span {
        font-style: ${props => props.fSpanStyle !== 'font-style' ? props.fSpanStyle : 'normal' };
        font-weight: ${props => props.fSpanWeight !== 'font-weight' ? props.fSpanWeight : 'normal' };
       }
     
    @media(max-width: 575px) {
       font-size: 0.9em;
        & > span {
        font-size: 0.95em;
       }
    }
    
    @media(min-width: 576px) {
       font-size: 1em;
        & > span {
        font-size: 1.05em;
       } 
    }
    
    @media(min-width: 768px) {
        font-size: 1.1em;
        & > span {
        font-size: 1.2em;
       }
    }
    
    @media(min-width: 992px) {
        font-size: 1.15em;
        & > span {
        font-size: 1.25em;
       }
    }
    
    @media(min-width: 1200px) {
        font-size: 1.2em;
        & > span {
        font-size: 1.3em;
       }
    }
`;

export default Paragraph;