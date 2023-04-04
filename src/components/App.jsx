import { UserCard } from 'components/UserCard/UserCard'
import { UserStats } from 'components/UserStats/UserStats'
import { UserProfile } from 'components/UserProfile/UserProfile'

import { StatisticsTitle } from 'components/StatisticsTitle/StatisticsTitle'
import { StatisticsList } from 'components/StatisticsList/StatisticsList'
import { FriendList } from './FriendList/FriendList'
import { TransactionHistory } from './TransactionHistory/TransactionHistory'
import user from '../markupData/user'
import data from '../markupData/data'
import friends from '../markupData/friends'
import transactions from '../markupData/transactions'


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
      <StatisticsList data={data} />

      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </>
  );
};