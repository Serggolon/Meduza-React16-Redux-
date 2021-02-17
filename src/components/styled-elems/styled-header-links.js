import styled from 'styled-components';
import Container from './container';

const StyledHeaderLinks = styled(Container)`
    border: none;
    background: none;
    margin: 0;
    
    & > a {
    display: grid;
    align-items: center;
    justify-content: center;}
    
    @media(max-width: 575px) {
    grid-template-columns: 1fr;
   }
    
   @media(min-width: 576px) {
    grid-template-columns: 1fr;
   }
    
   @media(min-width: 768px) {
   grid-template-columns: 1fr;
   }
    
   @media(min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
   }
    
   @media(min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
   }
`;

export default StyledHeaderLinks;