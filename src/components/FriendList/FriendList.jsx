import PropTypes from 'prop-types';
import { FriendListList } from './FriendList.styled';

import { FriendListItem } from '../FriendListItem/FriendListItem'

export const FriendList = ({ friends }) => {
    return (
        <FriendListList>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
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
    }).isRequired).isRequired,
};