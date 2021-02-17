import styled from 'styled-components';

const Header = styled.header`
    display: grid;
  
    grid-column-gap: 0.5em;
    
    min-height: 7rem;
    justify-items: center;
    align-items: center;
    border: 0.035em solid darkcyan;
    border-radius: 0.4em;
    padding: 0.8em;
    background-color: black;
    
    a:hover {
        color: rgb(0,250,154);
        text-decoration: none;
        }
  
  @media(max-width: 575px) {
    grid-template-columns: 1fr 2fr;
   }
    
   @media(min-width: 576px) {
    grid-template-columns: 1fr 2fr;
   }
    
   @media(min-width: 768px) {
   grid-template-columns: 1fr 2fr;
   }
    
   @media(min-width: 992px) {
    grid-template-columns: 3fr 2fr;
   }
    
   @media(min-width: 1200px) {
    grid-template-columns: 3fr 2fr;
   }
`;

export default Header;