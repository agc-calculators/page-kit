import styled from 'styled-components';

const StyledLayout = styled.div`
    display: flex;
`;

const StyledLayoutColumnMain = styled.main`
    flex: 1;
    order: var(--layout-column-main-order, 2);
    padding: var(--layout-column-main-padding, 20px);
    border-left: var(--layout-column-main-border-left, 1px solid #cccccc);
    border-right: var(--layout-column-main-border-right, 1px solid #cccccc);
`;

const StyledLayoutColumnAside = styled.aside`
    order: var(--layout-column-aside-order, 1);
    width: var(--layout-column-aside-width, 20%);
    background: var(--layout-column-aside-background, #ffffff);
    padding: var(--layout-column-aside-padding, 20px);
`;


export { 
    StyledLayout,
    StyledLayoutColumnMain,
    StyledLayoutColumnAside
}
