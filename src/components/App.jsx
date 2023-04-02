
import { UserCard } from 'components/UserCard/UserCard'
import user from '../markupData/user'



export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <UserCard avatar={user.avatar} />
    </div>
  );
};
