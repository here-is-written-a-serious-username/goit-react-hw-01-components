import styled from '@emotion/styled';

export const FriendListItemItem = styled.li`
display: flex;
align-items: center;
border: 1px solid #00000069;
background-color: #ffffff;
width: 100%;
height: 100%;
padding:  24px  24px  24px 30px;
`

export const Status = styled.span`
width: 18px;
height: 18px;
border-radius: 50%;
margin-right: 20px;
background-color: ${prop => prop.isOnline ? 'green' : 'red'};
`

export const Avatar = styled.img`
width: 100px;
height: auto;
margin-right: 10px;
`

export const Name = styled.p`

`