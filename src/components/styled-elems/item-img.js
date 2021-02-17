import styled from 'styled-components';

const ItemImg = styled.img`
   margin: 0;
   height: 100%;
   object-fit: cover;
   
   @media(max-width: 575px) {
    width: 11em;
    
    }
    
    @media(min-width: 576px) {
    width: 13em;
   
    }
    
    @media(min-width: 768px) {
    width: 18em;
    
    }
    
    @media(min-width: 992px) {
    width: 19em;
    
    }
    
    @media(min-width: 1200px) {
    width: 20em;
    
  }
`;

export default ItemImg;