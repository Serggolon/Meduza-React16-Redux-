import styled from 'styled-components';

const StyledGoodsList = styled.ul`
    list-style: none;
    display: grid;
    align-items: start;
    justify-items: center;
    grid-gap: 1em;
    padding: 0;
    margin: 0;

    @media(max-width: 575px) {
        grid-template-columns: 1fr;      
    }
    
    @media(min-width: 576px) {
        grid-template-columns: 1fr;
    }
    
    @media(min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media(min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }
    
    @media(min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

export default StyledGoodsList;