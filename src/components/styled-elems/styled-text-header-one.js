import styled from 'styled-components';

const StyledHeaderOne = styled.h1`
    margin: 0;
    color: ${props => props.active ? 'black' : 'white'};
    text-shadow: 1px 1px 2px black, 0 0 1em orange;
    word-wrap: normal;
`;

export default StyledHeaderOne;