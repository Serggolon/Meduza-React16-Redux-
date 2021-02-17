import styled from 'styled-components';

const StyledGoodMinPhotos = styled.section`
   margin: 0;
   padding: 0;
   display: grid;
   
   
   
   @media(max-width: 575px) {
    grid-template-columns: repeat( 4, 1fr);
    justify-items: start;
    align-items: start;
    
   }
    
   @media(min-width: 576px) {
    grid-template-columns: repeat( 4, 1fr);
    justify-items: start;
    align-items: start;
   }
    
   @media(min-width: 768px) {
    grid-template-columns: repeat( 4, 1fr);
    justify-items: start;
    align-items: start;
   }
    
   @media(min-width: 992px) {
    grid-template-columns: repeat( ${props => props.columnsNumber ? props.columnsNumber : 1}, 1fr);
    align-items: center;
    justify-items: start;
   }
    
   @media(min-width: 1200px) {
    grid-template-rows: repeat( ${props => props.columnsNumber ? props.columnsNumber : 1}, 1fr);
    align-items: ${props => props.columnsNumber>1 ? 'center' : 'start'};
    justify-items: start;
   }
`;

export default StyledGoodMinPhotos;