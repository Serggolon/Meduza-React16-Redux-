import styled from 'styled-components';

const StyledHeaderTwo = styled.p`
    
    margin: 0.1em;
    grid-area: a;
    color: ${props => props.active ? 'black' : 'gold'};
    text-shadow: 1px 1px 2px black, 0 0 1em orange;
    word-wrap: normal;
    
   @media(max-width: 575px) {
    font-size: 1em;
   }

   @media(min-width: 576px) {
   font-size: 1.1em;
   }

   @media(min-width: 768px) {
      font-size: 1.3em;
   }

   @media(min-width: 992px) {
      font-size: 1.5em;
   }

   @media(min-width: 1200px) {
      font-size: 1.7em;
   }
`;

export default StyledHeaderTwo;