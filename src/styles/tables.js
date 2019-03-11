import styled from 'styled-components';


const StyledTable = styled.table`
vertical-align: top;
border-top: 1px solid #c2ccd1;
border-left: 1px solid #c2ccd1;
margin-bottom: 8px;
width: 100%;
border-collapse: collapse;
border-spacing: 0;

td, th {
padding: 6px;
vertical-align: top;
border: 1px solid #c2ccd1;
}

thead {
background: var(--thead-background-color, #ebeef0);
}

th {
font-weight: 700;
}

tbody {
background-color: var(--tbody-background-color, #fff);
}
`;

export {
    StyledTable
}