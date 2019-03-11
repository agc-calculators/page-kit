import styled from 'styled-components';

const StyledStickyContainer = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: center;
`;

const StyleStickyDiv = styled.div`
position: -webkit-sticky;
position: sticky;
top: var(--sticky-div-top, 0px);
`;


export {
    StyledStickyContainer,
    StyleStickyDiv
}