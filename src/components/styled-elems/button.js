import styled from 'styled-components';

const Button = styled.button`
margin: 0.25em;
padding-left: 0.3em;
padding-right: 0.3em;
color: ${props => props.active ? 'darkcyan' : 'black'};
border: 0.05em solid darkcyan;
border-radius: 0.4em;
background-color: ${props => props.active ? 'black' :'darkcyan'};
`;

export default Button;