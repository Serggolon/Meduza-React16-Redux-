import styled from 'styled-components';

const StyledGoodPhoto = styled.img`
    margin: 0;
    padding: 0;   
    display: flex;
    align-content: center;
    justify-content: center;
    border: 2px solid gold;
    
    @media(max-width: 575px) {
    width: 16.5em;
    height: 12em;
   }
    
   @media(min-width: 576px) {
    width: 27em;
    height: 19.5em;
   }
    
   @media(min-width: 768px) {
    width: 31em;
    height: 22em;
   }
    
   @media(min-width: 992px) {
    width: 38em;
    height: 29em;
   }
    
   @media(min-width: 1200px) {
    width: 45em;
    height: 32em;
   }
`;

export default StyledGoodPhoto;