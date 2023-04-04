import styled from '@emotion/styled';

export const StatList = styled.ul`
margin-left: auto;
margin-right: auto;
margin-bottom: 88px;
width: 600px;
background-color: #ffffff;
display: flex;
`

export const StatItem = styled.li`
display: flex;
flex-direction: column;
align-items:center;
padding: 20px 0;
flex: 1 1 auto;
background-color: ${getRandomHexColor()};
`

export const StatItemlabel = styled.span`
margin-bottom: 5px;
`

export const StatItemPercent = styled.span`
padding: 1px;
`

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}