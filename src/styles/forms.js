import styled from 'styled-components';

const StyledForm = styled.form`
p.error, p.description {
font-size: 14px;
padding: 4px 0;
margin: 0;
}
p.error {
color: #eb5a46;
}
p.description {
color: var(--form-description-color, #6b808c);
}
label, legend {
font-weight: 700;
color: var(--form-text-color, #17394d);
font-size: 14px;
line-height: 16px;
margin-top: 16px;
margin-bottom: 8px;
display: block;
}
input:not([type=file]),
select,
textarea {
background-color: #fafcfc;
border: none;
box-shadow: inset 0 0 0 2px #dfe3e6;
color: #17394d;
box-sizing: border-box;
-webkit-appearance: none;
border-radius: 3px;
display: block;
line-height: 20px;
padding: 8px 12px;
transition-property: background-color,border-color,box-shadow;
transition-duration: 85ms;
transition-timing-function: ease;
width: 100%;
margin: 4px 0 12px;
}
input[type=submit], button {
width: auto;
background-color: #ebeef0;
color: #a6b3ba;
box-shadow: 0 1px 0 0 rgba(9,45,66,.13);
border: none;
cursor: pointer;
display: inline-block;
font-weight: 700;
line-height: 20px;
margin: 8px 4px 0 0;
padding: 6px 24px;
text-align: center;
&.primary {
background-color: #5aac44;
box-shadow: 0 1px 0 0 #3f6f21;
border: none;
color: #fff;
}
}
`;

export {
    StyledForm
}