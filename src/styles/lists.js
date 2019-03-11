import styled from 'styled-components';

const StyledList = styled.ul`
list-style: none;
margin: 0;
padding: 0;    
`;
const StyledListItem = styled.li`
margin-bottom: var(--list-item-spacing, 4px);
> a {
align-items: center;
background-color: transparent;
border-radius: 4px;
box-shadow: none;
color: var(--list-item-color, #17394d);
display: flex;
font-weight: 700;
margin: 0;
min-height: 20px;
overflow: hidden;
padding: 6px 8px 6px 0;
text-decoration: none;
transition-property: background-color, border-color, box-shadow;
transition-duration: 85ms;
transition-timing-function: ease;
}    
> a:hover {
color: var(--list-item-hover-color, #092d42);
background-color: var(--list-item-hover-background, rgba(9,45,66,.13));
}
&.active > a,
&.active > a:hover {
background-color: var(--list-item-active-background, #e4f0f6);
color: var(--list-item-active-color: #026aa7);
}
`;

const StyledListItemIcon = styled.span`
display: block;
flex: 0 0 auto;
text-align: center;
width: var(--list-item-icon-width, 32px);
color: #798d99
`;

const StyledListItemText = styled.span`
flex: 1 1 auto;    
`;

const StyledListHeader = styled.div`
margin: 0;
align-items: baseline;
display: flex;
height: 32px;
padding: 0 0 0 8px;

> :first-child {
display: block;
color: var(--list-header-color, #6b808c);
font-size: 12px;
font-weight: 500;
letter-spacing: 0.4em;
line-height: 16px;
margin-top: 16px;
text-transform: uppercase;
flex: 1 1 auto;
margin: 0;
padding: 8px 0;
}
`;

const InlineStyledList = styled(StyledList)`
text-align: center;
`;

const InlineStyledListItem = styled.li`
display: inline-block;
vertical-align: top;

> a {
border-radius: 3px;
color: var(--list-item-color, #6b808c);
display: block;
margin: 0 1px 1px;
padding: 6px 8px;
transition: .1s ease;
text-decoration: underline;
background-color: transparent;
}

&:hover > a {
background-color: var(--list-item-hover-background, #edeff0);
color: var(--list-item-hover-color, #092d42);
}

&.active > a,
&.active > a:hover {
background-color: var(--list-item-active-background, #e4f0f6);
color: var(--list-item-active-color: #026aa7);
}    
`;


export {
    StyledList,
    StyledListItem,
    StyledListItemIcon,
    StyledListItemText,
    StyledListHeader,
    InlineStyledList,
    InlineStyledListItem
}