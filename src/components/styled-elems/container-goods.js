import styled from 'styled-components';

const ContainerGoods = styled.article`
margin: 0;
padding:0;
display: grid;
grid-template-columns: 1fr;

grid-gap: 0.7em;

@media(max-width: 575px) {
        grid-template-rows: 7em 7em  auto;
    }
    
    @media(min-width: 576px) {
       grid-template-rows: 6em 4.5em  auto;
    }
    
    @media(min-width: 768px) {
        grid-template-rows: 4.5em 3.7em  auto;
    }
    
    @media(min-width: 992px) {
       grid-template-rows: 4em 3.7em  auto;
    }
    
    @media(min-width: 1200px) {
        grid-template-rows: 4em 3.7em  auto;
    }
`;

export default ContainerGoods;