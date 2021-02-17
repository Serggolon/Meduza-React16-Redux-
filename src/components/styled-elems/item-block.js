import styled from 'styled-components';

const ItemBlock = styled.article`
    padding: 0;
    margin: 0;
    display: grid;
    
    
    @media(max-width: 575px) {
    position: static;
    grid-template-columns: 1fr 1fr;
   }

   @media(min-width: 576px) {
    position: static;
    grid-template-columns: 1fr 1fr;
   }

   @media(min-width: 768px) {
    position: relative;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(15rem, 25rem);
   }

   @media(min-width: 992px) {
    position: relative;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(15rem, 25rem);
   }

   @media(min-width: 1200px) {
   position: relative;
   grid-template-columns: 1fr;
   grid-auto-rows: minmax(15rem, 25rem);
   }
`;

export default ItemBlock;