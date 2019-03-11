import styled from 'styled-components';

const StyledCard = styled.div`
background-color: #ffffff;
border-radius: 4px;
box-shadow: 0 1px 1px rgba(9,45,66,.25), 0 0 0 1px rgba(9,45,66,.08);
display: flex;
margin-bottom: 16px;
position: relative;
width: 100%;
`;

const StyledCardContent = styled.div`
padding: 4px 8px;
`

export {
    StyledCard,
    StyledCardContent,
}