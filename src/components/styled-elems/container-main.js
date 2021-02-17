import styled from 'styled-components';
import Container from './container'

const ContainerMain = styled(Container)`
grid-template-columns: 1fr;
 
 @media(max-width: 575px) {
    min-height: 25em;
   }
    
   @media(min-width: 576px) {
    min-height: 31em;
   }
    
   @media(min-width: 768px) {
    min-height: 40em;
   }
    
   @media(min-width: 992px) {
    min-height: 44em;
   }
    
   @media(min-width: 1200px) {
    min-height: 44em;
   }
`;

export default ContainerMain;