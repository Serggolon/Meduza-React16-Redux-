import styled from 'styled-components';

const ContainerContacts = styled.article`
margin: 0;
padding: 0;
display: grid;
grid-template-rows: 3em;
grid-gap: 0.3em;

@media(max-width: 575px) {
    grid-template-areas: 
            "a a a"
            "b b b"
            "c c c";
   }
    
   @media(min-width: 576px) {
   grid-template-areas: 
            "a a a"
            "b b b"
            "c c c";
   }
    
   @media(min-width: 768px) {
    grid-template-areas: 
            "a a a"
            "b c c";
   }
    
   @media(min-width: 992px) {
    grid-template-areas: 
            "a a a"
            "b c c";
   }
    
   @media(min-width: 1200px) {
    grid-template-areas: 
            "a a a"
            "b c c";
   }
`;

export default ContainerContacts;