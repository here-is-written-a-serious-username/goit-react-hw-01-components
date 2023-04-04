import PropTypes from 'prop-types';
import { FriendListList, FriendListItem, Status, Avatar, Name } from './FriendList.styled';


export const FriendList = ({ friends }) => {
    return (
        <FriendListList>
            {friends.map(({ id, avatar, name, isOnline }) => (

                <FriendListItem key={id}>
                    <Status style={{ backgroundColor: isOnline ? 'green' : 'red' }}></Status>
                    <Avatar src={avatar} alt={name}></Avatar>
                    <Name>{name}</Name>
                </FriendListItem>
            ))
            }
        </FriendListList >
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    })).isRequired,
};