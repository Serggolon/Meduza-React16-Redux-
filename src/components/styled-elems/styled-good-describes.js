import styled from 'styled-components';

const StyledGoodDescribes = styled.section`
    margin: 0;
    display: grid;
    grid-area: c;
   
    @media(max-width: 575px) {
    padding: 0;
    justify-items: start;
   }

   @media(min-width: 576px) {
    padding: 0;
    justify-items: start;
   }

   @media(min-width: 768px) {
    padding: 0;
    justify-items: start;
   }

   @media(min-width: 992px) {
    padding: 0.8em;
    justify-items: start;
   }

   @media(min-width: 1200px) {
    padding: 0.8em; 
    justify-items: start;
   }
`;

export default StyledGoodDescribes;