import { UserCard } from 'components/UserCard/UserCard'
import { UserStats } from 'components/UserStats/UserStats'
import { UserProfile } from 'components/UserProfile/UserProfile'
import user from '../markupData/user'



export const App = () => {
  return (
    <>
      <UserProfile>
        <UserCard
          src={user.avatar}
          alt='User avatar'
          username={user.username}
          tag={user.tag}
          location={user.location}
        />
        <UserStats
          stats={user.stats}
        />
      </UserProfile>
    </>
  );
};
