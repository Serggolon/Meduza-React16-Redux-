import styled from 'styled-components';

const StyledGoodDetails = styled.article`
    margin: 0;
    padding: 0; 
    display: grid;
    grid-template-columns: 1fr;
    
    justify-items: center;
    align-items: start;
    
    @media(max-width: 575px) {
    grid-template-areas:
                        "a a"
                        "c c"
                        "b b";
   }
    
   @media(min-width: 576px) {
    grid-template-areas:
                        "a a"
                        "c c"
                        "b b";
   }
    
   @media(min-width: 768px) {
    grid-template-areas:
                        "a a"
                        "b b"
                        "c c";
   }
    
   @media(min-width: 992px) {
   grid-template-areas:
                        "a a"
                        "b c";
   }
    
   @media(min-width: 1200px) {
    grid-template-areas:
                        "a a"
                        "b c";
   }
`;

export default StyledGoodDetails;