import styled from '@emotion/styled';

export const Title = styled.h1`
  margin-top: 0;
  text-align: center;
  text-transform: uppercase;
`;

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
background-color: ${props => props.randomBackgrColor};
`

export const StatItemlabel = styled.span`
margin-bottom: 5px;
`

export const StatItemPercent = styled.span`
padding: 1px;
`