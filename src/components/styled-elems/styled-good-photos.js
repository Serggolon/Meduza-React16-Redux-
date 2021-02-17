import styled from 'styled-components';

const StyledGoodPhotos = styled.section`
    margin: 0;
    padding: 0.8em;
    display: grid;
    grid-area: b;
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    align-items: flex-start;
    
    @media(max-width: 575px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0.5em;
   }
    
   @media(min-width: 576px) {
    grid-template-columns: 1fr;
    grid-column-gap: 1em;
   }
    
   @media(min-width: 768px) {
    grid-template-columns: 1fr;
    grid-column-gap: 1em;
   }
    
   @media(min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1em;
   }
    
   @media(min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1em;
   }
`;

export default StyledGoodPhotos;