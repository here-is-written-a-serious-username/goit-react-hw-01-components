import PropTypes from 'prop-types';
import { Status, Avatar, Name, FriendListItemItem } from './FriendListItem.styled';


export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <FriendListItemItem>
            <Status isOnline={isOnline}></Status>
            <Avatar src={avatar} alt={name}></Avatar>
            <Name>{name}</Name>
        </FriendListItemItem>
    )
};


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};