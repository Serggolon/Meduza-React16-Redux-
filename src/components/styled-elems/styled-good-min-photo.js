import styled from 'styled-components';

const StyledGoodMinPhoto = styled.img`
    border: ${props => props.highlighted ? "2px solid gold" :  "2px solid black"};
    margin: 0.4em;
    padding: 0;   
    display: flex;
    align-content: center;
    justify-content: center;
    overflow: hidden;
    
    
    @media(max-width: 575px) {
    width: 4em;
    height: 2.5em;
    }
    
    @media(min-width: 576px) {
    width: 6em;
    height: 4em;
    }
    
    @media(min-width: 768px) {
    width: 7em;
    height: 5em;
    }
    
    @media(min-width: 992px) {
    width: 8em;
    height: 6em;
    }
    
    @media(min-width: 1200px) {
    width: 9em;
    height: 7em;
  }

`;

export default StyledGoodMinPhoto;