
import { UserProfile } from 'components/UserProfile/UserProfile'
import { Statistics } from 'components/Statistics/Statistics'
import { FriendList } from './FriendList/FriendList'
import { TransactionHistory } from './TransactionHistory/TransactionHistory'

import user from '../markupData/user'
import data from '../markupData/data'
import friends from '../markupData/friends'
import transactions from '../markupData/transactions'


export const App = () => {

  return (
    <>
      <UserProfile
        src={user.avatar}
        alt='User avatar'
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics title='Upload stats' data={data} />

      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </>
  );
};