import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import user from "user.json";
import data from "data.json";
import FriendList from "./ListOfFRiends/FriendList/FriendList";
import friends from "friends.json";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        //display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats = {data} />
      {/*<Statistics stats={data} />*/}

      <FriendList friends={friends} />
    </div>
  );
};
