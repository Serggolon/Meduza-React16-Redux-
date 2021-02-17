import styled from 'styled-components';

const StyledGoodsListItem = styled.li`
    display: grid;
    overflow: hidden;
    border: 0.05em solid darkcyan;
    background-color: darkcyan;
    
   @media(max-width: 575px) {
    width: 22em;
    height: 9em;
   }

   @media(min-width: 576px) {
    width: 25em;
    height: 10em;
   }

   @media(min-width: 768px) {
    width: 18em;
    height: 21em;
   }

   @media(min-width: 992px) {
    width: 19em;
    height: 22em;
   }

   @media(min-width: 1200px) {
    width: 19em;
    height: 22em;
    
   }
`;

export default StyledGoodsListItem;