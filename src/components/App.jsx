import { UserCard } from 'components/UserCard/UserCard'
import { UserStats } from 'components/UserStats/UserStats'
import { UserProfile } from 'components/UserProfile/UserProfile'

import { StatisticsTitle } from 'components/StatisticsTitle/StatisticsTitle'
import user from '../markupData/user'
import data from '../markupData/data'


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

      <StatisticsTitle text='Upload stats' data={data} />
    </>
  );
};
